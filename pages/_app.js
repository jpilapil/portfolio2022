import { useEffect } from "react";
import Head from "next/head";
import "./app.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "../components/navigation/Navigation";

function MyApp({ Component, pageProps }) {
  // control for fade in animation on components
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
      </Head>
      <div id="site-border">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
