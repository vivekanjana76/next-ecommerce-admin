import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Increase the listener limit to avoid the warning
    process.setMaxListeners(20); // Adjust the number as needed
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

