import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return [
    process.env.MAINTENANCE === "1" ? null : <Component {...pageProps} />,
  ];
}

export default MyApp;
