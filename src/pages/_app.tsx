import "@/styles/globals.css";
import "@/styles/style.scss";
import Layout from "lib/components/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
