import { useState, useEffect } from "react";
import Head from "next/head";

// components
import AppLoading from "../components/AppLoading";
import AppLayout from "../components/AppLayout";

// context
import _appContext from "../context/_appContext";

// styles
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);
  const [cardSettings, setCardSettings] = useState(false);
  const [fileSettings, setFileSettings] = useState(false);

  // USE HOOK AND OBTAIN FROM NOSQL DB
  const [notes, setNotes] = useState({
    'canvas': ['d3 basic'],
    'data-structures': ['binary heaps', 'binary search trees', 'linked lists', 'stacks and queues'],
    'docker': ['intro'],
    'express-js': ['basics', 'mongoose'],
    'firebase': ['intro'],
    'math': ['statistics-1'],
    'miscellaneous': ['image upload', 'local storage', 'scroll', 'search user', 'touch controls', 'upload_download file'],
    'next-js': ['api', 'mongoose', 'next', 'router', 'tailwind'],
    'react': ['context', 'redux', 'router_v6'],
    'three': ['three 2', 'three'],
  })
  // END USE HOOK

  // const { notes, updateNote, deleteNote, loadingNotes } = customHook();
  
  // check if mobile device
  const [mobile] = useState(
    typeof window !== "undefined"
      ? /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      : false
  );

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
    // cache images - optimize later
    const count = 0;
    const bg1 = new Image();
    const bg2 = new Image();
    const bg3 = new Image();
    bg1.onload = () => {
      count++;
      if (count === 4) setLoading(false);
    };
    bg2.onload = () => {
      count++;
      if (count === 4) setLoading(false);
    };
    bg3.onload = () => {
      count++;
      if (count === 4) setLoading(false);
    };
    bg1.src = '/images/home/darkgalaxy.jpeg';
    bg2.src = '/images/home/AdobeStock_121270629.jpeg';
    bg3.src = '/images/home/test1.svg';
    // cache images - optimize later
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio | Matthew Sweeney</title>
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
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:site_name" content="Next.js-tailwind" />
        <meta property="og:title" content="drmatt13's portfolio" />
        <meta property="og:description" content="Welcome to my landing page, feel free to stick around" />
        <meta property="og:image" content="https://next-portfolio2-omega.vercel.app/og-image.jpg" />
      </Head>
      {loading ? <AppLoading /> : 
      <_appContext.Provider 
        value={{ 
          mobile, 
          darkMode, 
          setDarkMode, 
          cardSettings, 
          setCardSettings, 
          fileSettings,
          setFileSettings,
          notes, 
          setNotes 
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
