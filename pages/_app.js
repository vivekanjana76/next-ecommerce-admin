import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Increase the listener limit to avoid the warning
    process.setMaxListeners(20); // Adjust the number as needed
  }, []);

  return <Component {...pageProps} />;
}



