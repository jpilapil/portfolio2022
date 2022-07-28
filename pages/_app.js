import { useEffect } from "react";
import Head from "next/head";
import "./app.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "../components/navigation/Navigation";
import Socials from "../components/socials";
import Footer from "../components/footer";

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
      <Navigation />
      <Component {...pageProps} />
      <Socials isLeft={true} />
      <Footer />
    </>
  );
}

export default MyApp;
