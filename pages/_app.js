import '../styles/globals.css'
import MouseContextProvider from "../lib/MouseContext";
import {Analytics} from '@vercel/analytics/react';

function MyApp({Component, pageProps}) {
    return (
        <MouseContextProvider>
            <Component {...pageProps} />
            <Analytics/>
        </MouseContextProvider>
    )
}

export default MyApp
