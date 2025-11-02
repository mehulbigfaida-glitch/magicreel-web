// pages/_app.js
import '@/styles/global.css'; // global styles must only be imported here

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
