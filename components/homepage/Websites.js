import { useState, useContext } from 'react'

// components
import GlitchText from "../GlitchText";
import WebsiteCard from '../WebsiteCard'

// context
import _appContext from "../../context/_appContext";

// styles
import styles from "../../styles/Websites.module.scss";

const Websites = () => {

  const { darkMode } = useContext(_appContext);

  const [cards] = useState([
    {
      src: "/images/home/websites/placeholder1.png",
      blurDataURL: "data:image/webp;base64,UklGRhIFAABXRUJQVlA4WAoAAAAgAAAAPQIAswEASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCDUAgAAEEEAnQEqPgK0AT7tdrhWqaclI6AIATAdiWlu4W2ggz/h6OswAJ7DEUtuxaBy2P57ZOQ99snJTZf7ZRJ7bMyzqu9yRGgWS7XmZr9Nt22Vs7EzVTr/dJ3yK93Q3dsAJea/H3pCcNXaWCda49OXPdkAXeeoqfvPVGQ8Q6ya7ljJN9CJWSd+5wCp+89UZELLcCKspuC1Lj/XNPq4jt9mhvHoVgylr2OyURQRA9Rk7LfzHMJnZ6ihYJhL/EdIbO/eCIqfqbOllF27AXBSGCv/jqbZobvPUVMp2oAOPnsDzvb3r61fNGalP3N4p1fe0fojPpA2vFyeIcQEZA2rCCG2cPD2ooV+zfp7ZOQ+Rme32aJuHL2Lmpku0qBZLteWl2+1k22Aqyba+92ych77ZOQ994iiZPgi4qfcFku14uTkPfbJ6u88yoCOrqlpUCyXa8XJyHyNIAshu88yXcbzbm14uTkPfbJ6u5bJdtMNrxcnIe+2WoAqyQNrxiP0E32ych77ZOREDych8MWQRcoDAPfbJyHvtk5D320MDSm/BLk5D32ych78AQD33E4YsSl2vFych77ZOQ99tCKO2ZydpdrxcnIe+2TkPfbSDIrFm9snIe+2TkRA8nIe+4ntGYO88nIe+2TkPfbJydGH7xKehtza8XJyHvwBAPfntmjkOmG14uTkPfbN3JyHwxYlz31xJyHvtk4/gAD++1SE9jn4lhY7guMGhw5BPa8Vwh4+K0kdBh4rbR1M6rKTo3RdIy5dEMPr6Hr/5D+Zvw9NBDQ5XTa5aIhvCWL8HEIHrzCPqhkzBHpsWRc63X4LuuUTynru+iGsDAiWK2DRJ7UYuzQ5Buckcp+fkSAZuLSRohmHvs8l/KII6lo2DC3xgA6b8ggpOuFYcjrrKBK/GhL+ym3HJAhwurDFYpDdyTCDgDHDBT2hANIcBnApNAE7AAAAMe7a4CaWBAAAAAAAAA==",
      title: "Banned Social",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit, Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "https://banned-social.vercel.app",
      button: "Welcome Anon",
      dimensions: {
        width: 600,
        height: 456
      }
    },
    {
      src: "/images/home/websites/costello.jpg",
      blurDataURL: "data:image/webp;base64,UklGRiIEAABXRUJQVlA4WAoAAAAgAAAAHgEAmQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCDkAQAAsBgAnQEqHwGaAD7tcK1Sv6YjoqX12/vwHYlpbt/pNsk2hm1/52JKMQJrxA41Qoppj1iL2Da8Vl6IBbGwg/akpASRI3FCbq8ZuuIhl1EkKT9sURjm6YrfNIw60s+C/Pohgl/Jq7VPBTiGZIUsZ/SoqEuCIA7YyGwZR0aDcL7qZ8sO/w2xEj5jA+2SPdkN4GAlTPQlwEzBR7L0AjLnd+Ciomh3o5duzdzEOGk6qS/OiXFQ1aehi5OfTvBsisjAp+6qjikO+cNJYB2XVVRUhwAA/uuZ+mmVMTPjERQGJev3marnLbfdSDxK9jzsgZXPBRw+e96P9z8p5x/OSIV2Au3280lGJ6cReoZGp8Vn8UkxU1BN4jcqsVvMUsWt9ABO8iyk4pU5/SUiY5YtRqOziSWgh9+oPlofL0F2xC0UL1hN0l5v54GCKA1d9DCaiqAgMmHU7VIN3emDKcVGsF9goTYSFH5C0IqH9j6MCz6i0Ik+BgXgdmIvcGsNT+Qk72zU8JNIp85WIOhQQh7xyBcO9i8ZCZhu5ItSCMG/wq4jX3uq4DPBWwY3FNoDUfPG4ObrCDRYUVss3J/7IPJbpJ7MepnWsX0tarvpTdNm1w97/wI0uEUBn2MSBA0ltuyPx/c2vuSwiQAAAA==",
      title: "Costello Ink",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit, Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit, Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "https://costello.vercel.app",
      button: "Get a tattoo?",
      dimensions: {
        width: 2698,
        height: 1522
      }
    },
    {
      src: "/images/home/websites/AdobeStock_316550414.jpeg",
      blurDataURL: "data:image/webp;base64,UklGRs4EAABXRUJQVlA4WAoAAAAgAAAAHgEAvQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCCQAgAAUBoAnQEqHwG+AD7tcK9UKbgpoyMQ28sAHYlnbt3V5tT0LlEO6T8Tn/p63s7vyANyUAKWCs/pOfr9fZzNJqTuIFeLpD4r7gU2T+ey3VPN3or8hAf71kqPXqlGjbxWcKoxSB5EWGI78eNL5o8LXSO3ayAHqDhAYPX2+Alt6K/AkzzOxvFyJEbPxsFXCkqhNORcRNjeJoVPLpRrEqOxbkYd3YIfW670bTMulF9yJretfmtUYqm2b357kONTwcz+kmDknWMHjXGdSSQEW1Rs1YdTqdc623PZI7r9fpgAAP7cWf/8GZ/Ux/jMvpCLRjeaVKlCi2gJ22HuAo43UOdedy1ifwUBgI/+8H6ddq1Ca4wOcGzPphhRtFk0mjwcfVxkWerIY4RQVayBfVeam4csBWwKXzYJz1llxtEJ2/JBKqfk3ofg5W4hSotKTV4oqCUBJ3yOrC9Rbfn65nlcxb8H983+MtZ5Vwrd4WVChtF3gFzr8c3SpbwTeQAVVOb39hHdrGC0DHpQb8SVdwZa1cZMdNIkliCHfRnqr15r6H6oAIFY3U2K8Ewg7ybrQo5rJGFvrEKw/WwnT8WGQc6gIMY/szpT3KBJSdErvl6V+PihIBJUty01wAeYjH6rzZSC0S+OIC4RzDDVS7lv/RNaI1EeD5SIlhun16zR01+zyHQ3Ti1LdI9jNglt3FDIha8nBj3wnvjH5Ot8WaxuIL/nfkc5TIlZ7SKfkvOc0nU1rg+hdtjywOn4gA+rbRdk7+IgwCR7b0achwbV5ZBEfacUF3SekcM4Ywhuc4T0/mGISXdthp3b9PQAa/RC6RmAHBgVRJwUqsRooaG5qhdepQtoABHgbYdpBLLsbj31kXWzo9xsgAAAAAA=",
      title: "Diamond Store",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Shop Now",
      dimensions: {
        width: 845,
        height: 559
      }
    },
    {
      src: "/images/home/websites/bluetiles.jpg",
      blurDataURL: "data:image/webp;base64,UklGRpwHAABXRUJQVlA4WAoAAAAgAAAAPQIAQgEASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBeBQAAED4AnQEqPgJDAT7tdrJWKac0o6AIWpAdiWlu37GfSHufz/54+gX//VbsE/z1Pdt5PL/2AJ3Rs/YYXSZMmTJkyZMmTJkyZMl5tyFLwl4vuRxrBeiSIXZqdLtIvJyBvMdl5Wz0/KpoUgUaQzuP3nrBlV5YLBvM71CIF4/fbni+Dieniz1djbV11ql6TzVeHwLbp7WdZqJAnAviz1djb5atBKI0zKAcLJUwZG3y11q/2MAbyrNSG2urNzA31djb5a61SiEN5/wTgXxZ6u2NxEOd2NvlrdX5IYA3idPxbGsSJa0ilq4oeUXLsACLNQ/38H7rt/ZljUDhulmjgxwAz9/sqYDuoE7rVKFbpTUWakmxbGn+oUjkeMHkzk1FhdeVZqJB/fi5XsWpZ0DazVDCNG/GJhF8ZZtZZyGSXKMVEgRX9cmRxv+no1xhyC924bqCp7eZ2RIE4F8hNy/VyaJs7Qgxoy6SAtErl+aj4F+rhhpqLNRJVCRI2HugoZrBXAe3ZnuQea2err1WrWFysqxjdODiwpnjaGQY19mzywDUQ4peZ8BR4iPyHlvmpC8r3KCEyyGbiXjY2EesDwED/cVtl6H3EiRwRGfgNc4LdfiZiHymjvwoUKFCn2sBsYKXzLD4fYKc4kSJEiRIkoMhjAO8mdgy1YjYrBYsWLFMAAD+8MRv/qV+bP5s163tqnMNLDD0OQlveK+dWtvLWFGfgZByPsC6DE7yRa5KNEW02ywEiIVIgEXLCmakop8kDoT6wWmJnDrSMZHe2KvSSqujldlI52b41NeNUbJ5MvWAHGf+52cuOKqMxyP1+UTWwMpAHD3y5D3JEIiCtXmpk6xFFtNGsncbSgcoAB9AK3kEbxPBLmTkeTnW6Kwsr8M6qreroICLbMAIROvKg78HFSRY5WG2tfm07sMJK+efYY5nurAcVWSZJ3W/THM+6MGoyXtXpnilUosjigAFSThto4mfLzNSFg9iswnLoFYHTaAPjOVISsuWU9udY7mPQLdWvuaKm2AL2Y+BFAlp8RROrfPSNrYDX5I5pR763IfBH6DehfUTw0eL5Ukv9IyBjIAGFn2gXra/uCR6y+vtwS8cZJymZ9Ern6/R0Ls5zgGDHHc1jaaK7g3FNm6dGxu1EHIhU01X4zuMZ9CUqUJHfVw6kv71xHcy0CF4QyRCTJ3Sgizrvm4DVWD1GnbWWQfha9nLLWwg5d1QCCd5d/v5ULdw0rvDecSLWcsNXHLMEtMenk54AoEUZNOqq3p2UFNaAvObMQVyuBOWgE5QWB7yHSj4LvXjFqUNJdloCeMgGn2W6eVY6pUQZKzFbpuFItppwdB/Xdi5JnpItFHtH0BU6YhWucqGMUHYDp7Ppr5MV9Y5FZRUzIS1UWzn9WTcX07UcABpKq80MHqPYg3uSz1nObQE5/3x0VtpxMYwI4Vc/aJYEHx8jUAKU8GgFn2vhzxgz7bP2x/s1hRrbeLpygQqElA2MraVOAAjFIQQLp3PzATYT11WHiucAzs30briN3vknL4tt552Rx8BvagzQ/eGaUlLAZRvjRyPkE/42lC3Bz4cY3MPFkiHyABqSe+5/86YfXCC26xvJm82IMyk6HaQ/3uBZlWclnbr/WKswP9fdf95kIDHkDJomggIl784lKPpxZb2FDNNmMHC9zrRpyLW4PKF60SCWAQ/3A4qFMI7dtmuhPvUIwZCKMGD9Fnvp6Nvt9238y1ns9AqoAABAga2wL4lThDed2hZ6t53puAbt/c5lZMySAAAADuQfaVa4I5clUoaIwDZe/FyTdh8iEAAAAAD3V5yS9yLbUnEtHDNNuzbQHGIAAAAAAAA",
      title: "Image Uploader",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "https://dev-challanges-image-uploader.vercel.app",
      button: "Upload Images",
      dimensions: {
        width: 852,
        height: 480
      }
    },
    {
      src: "/images/home/websites/pokemon.jpg",
      blurDataURL: "data:image/webp;base64,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",
      title: "Pokémon Card Manager",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "https://pokemon-pearl-seven.vercel.app",
      button: "Collect them all!",
      dimensions: {
        width: 902,
        height: 602
      }
    },
  ])

  return (
    <div className='relative pb-8 sm:pb-12'>
      <div 
        className="absolute top-0 w-full h-full opacity-60 dark:opacity-50 brightness-150 dark:brightness-75 transform-gpu" 
        style={{
          backgroundImage: `url(images/home/background-colud.jpg)`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          transform: "translatez(0)"
        }}
      >
        <div className='w-full h-full bg-gradient-to-b from-blue-700/40 to-zinc-500/60 dark:from-violet-600/[65%] dark:to-black/50'/>
      </div>
      <div className="text-gray-800 dark:text-white">
        <div 
          className="text-2xl sm:text-4xl lg:text-5xl py-8 sm:pt-12 text-center"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.25em",
          }}
        >
          <GlitchText text="WEBSITES" />
        </div>
        <style jsx>{`
          p {
            z-index: 100 !important;
            background: linear-gradient(45deg, 
              ${
                darkMode ?
                  "#d0cdfa, #f0bbe1"
                  :
                  "#black, #d0cdfa"
              }
            );
            background-clip: text;
            -webkit-background-clip: text;
            color: rgba(
              ${
                darkMode ?
                  "0,0,0,0.1"
                  :
                  "0,0,0,0.75"
              }
            );
          }
        `}</style>
        <p  
          className="px-6 text-center text-sm sm:text-md lg:text-base"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
          }}
        >
          {"while you're here, check out some of my other web projects :)"}
        </p>
      </div>
      <div className="flex justify-center overflow-x-visible">
        <style jsx>{`
          div::-webkit-scrollbar-thumb {
            background-color: ${darkMode ? "rgb(236, 72, 153)" : "rgba(99, 102, 241, 0.75)"};
          }
          div::-webkit-scrollbar-thumb:hover {
            background-color: ${darkMode ? "rgb(244, 114, 182)" : "rgba(99, 102, 241, 0.6)"}
          }
          div::-webkit-scrollbar-track {
            background: ${darkMode ? "rgba(255, 255, 255, 0.125)" : "rgba(0, 0, 0, 0.125)"};
          }
        `}</style>
        <div className={`${styles.scroll} pt-12 pb-10 sm:pt-16 sm:pb-14 flex /w-1 /px-80 w-full px-[50%] snap-mandatory snap-x gap-8 overflow-auto z-10`}>
          {cards && cards.map((data, index) => (
            <WebsiteCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Websites
