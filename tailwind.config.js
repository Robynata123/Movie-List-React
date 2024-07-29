/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#1F2544',
         'body-bg': '#your-body-bg-color',
      },
      backgroundImage: {
        'overlay': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',}
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

