import { useState, useEffect } from 'react';
import axios from 'axios';

const useMultiFetch = (apiUrls) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(apiUrls.map(url => axios.get(url)));
                const results = responses.flatMap(response => {
                    if (response.data && Array.isArray(response.data.results)) {
                        return response.data.results;
                    }
                    return [];
                });
                setData(results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiUrls]);

    return { data, loading, error };
};

export default useMultiFetch;
