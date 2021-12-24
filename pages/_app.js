import { useState, useEffect } from "react";
import Head from "next/head";

// components
import AppLayout from "../components/AppLayout";

// context
import _appContext from "../context/_appContext";

// styles
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  // check if mobile device
  const [mobile] = useState(
    typeof window !== "undefined"
      ? /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      : false
  );

  const [darkMode, setDarkMode] = useState(false);

  // tailwind dark mode
  useEffect(() => {
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
  }, []);

  return (
    <>
      <Head>
        <title>Home | Matthew Sweeney</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
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
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,user-scalable=no"
        />
        <meta name="theme-color" content={darkMode ? "#7d54ed" : "#f33984"} />
        <meta property="og:site_name" content="Next.js-tailwind" />
        <meta property="og:title" content="Matthew Sweeney's Web Portfolio" />
        <meta property="og:description" content="og:description" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <_appContext.Provider value={{ mobile, darkMode, setDarkMode }}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </_appContext.Provider>
    </>
  );
}

export default MyApp;
