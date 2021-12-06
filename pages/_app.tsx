import type { AppProps } from "next/app";
import Layout from "layouts";
import "styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
