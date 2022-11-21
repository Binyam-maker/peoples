import "../styles/globals.css";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };
  return renderWithLayout(<Component {...pageProps} />);
}

export default MyApp;
