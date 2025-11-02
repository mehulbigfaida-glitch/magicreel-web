import '../styles/global.css'   // ✅ Correct relative import path

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
