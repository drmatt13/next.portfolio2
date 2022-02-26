import { useState, useEffect } from "react";
import Head from "next/head";

// components
import AppLoading from "../components/AppLoading";
import AppLayout from "../components/AppLayout";

// context
import _appContext from "../context/_appContext";

// hooks
import useFolders from "../hooks/useFolders";

// styles
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {

  const [loadingImages, setLoadingImages] = useState(true);
  const { folders, setFolders, loadingFiles } = useFolders();
  
  // check if mobile device
  const [mobile] = useState(
    typeof window !== "undefined"
      ? /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      : false
  );

  const [modal, setModal] = useState();
  const [nav, setNav] = useState(true);
  const [buttons, setButtons] = useState();
  
  const toggleModal = (x) => {
    if (x) setNav(false);
    else {
      setNav(true);
      setModal(null);
      return null;
    }
    setModal(x);
    setButtons(false);
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // tailwind dark mode
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    }
    // await all images to load before showing the app 
    const images = [
      '/images/home/darkgalaxy-min.webp',
      '/images/home/AdobeStock_121270629.jpeg',
      '/images/home/test1.svg',
      '/images/home/Purple_Nebula_4.1.webp',
      '/images/home/AdobeStock_253500845-min.jpg',
      '/images/home/background-colud.jpg',
      '/images/home/clouds1.jpg',
    ];
    const delay = new Promise((resolve) => setTimeout(resolve, 1000));
    const promises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    Promise.all([delay, ...promises]).then(() => {
      setLoadingImages(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio | Matthew Sweeney</title>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.14.0/devicon.min.css"
          integrity="sha512-Fx1qTIVtFTb41Tqu+TxfaaPCcpmkRIbOIKh+4OIwVYAECoW89rz4BnRy95Vu8MYSRgghC3pS9mJ435hzarnZcw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/example.png" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,user-scalable=no"
        />
        <meta name="theme-color" content={darkMode ? "#7d54ed" : "#f33984"} />
        <meta name="description" content="Type description here" />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:site_name" content="Next.js-tailwind" />
        <meta property="og:title" content="drmatt13's portfolio" />
        <meta property="og:description" content="Welcome to my landing page, feel free to stick around" />
        <meta property="og:image" content="https://next-portfolio2-omega.vercel.app/og-image.jpg" />
      </Head>
      {loadingImages || loadingFiles ? <AppLoading /> : 
      <_appContext.Provider 
        value={{ 
          mobile, 
          darkMode, 
          setDarkMode, 
          folders,
          setFolders,
          modal,
          setModal,
          toggleModal,
          nav, 
          setNav,
          buttons, 
          setButtons
        }}
      >
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </_appContext.Provider>}
    </>
  );
}

export default MyApp;
