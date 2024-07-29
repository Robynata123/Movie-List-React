import { useState, useEffect, useCallback } from 'react';

const useMultiApi = (apiConfigs) => {
  const [data, setData] = useState({}); // Object to store data from each API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    const apiResults = {}; // Object to store results from each API call

    try {
      for (const config of apiConfigs) {
        if (!config || !config.url) {
          console.error('API URL is not defined for:', config);
          continue; // Skip fetching for undefined URLs
        }

        const { url } = config;
        console.log('Fetching URL:', url);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} for ${url}`);
        }

        const jsonData = await response.json();
        apiResults[url] = jsonData.results || jsonData; // Handle different response structures
      }

      setData(apiResults); // Update state with all API results
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  }, [apiConfigs]); // Dependency array ensures fetchData runs when apiConfigs change

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Call fetchData on component mount

  // Return relevant data based on API URLs
  const getDataForApi = (apiUrl) => data[apiUrl] || null; // Returns data or null if not fetched

  return { data, loading, error, getDataForApi, fetchData };
};

export default useMultiApi;
