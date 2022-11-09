import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      {/* <Head></Head> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
