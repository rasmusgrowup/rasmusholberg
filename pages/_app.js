import '../styles/globals.css'
import MouseContextProvider from "../lib/MouseContext";

function MyApp({ Component, pageProps }) {
  return (
    <MouseContextProvider>
      <Component {...pageProps} />
    </MouseContextProvider>
  )
}

export default MyApp
