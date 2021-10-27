export default [
{

"next _app.js": `
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
`,

"next index.js": `
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container} />
  </>
}
`,

"javascript .next.config.js": `
module.exports = {
  reactStrictMode: true,
}
`,

"file .env.local": `
# Server & Build-time Enviornment Variables

DB_USER=myuser
DB_PASS=mypassword

# Browser Enviornment Variables - NEXT_PUBLIC_ ...

NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
`,

"git .gitignore": `
.env.local
.env.development.local
.env.test.local
.env.production.local
`

},

{

"file readme": `
readme
`,

"next getStaticProps": `
export async function getStaticProps({ params }) {
  const res = await fetch('https://.../data')
  const data = await res.json()

  if (!data) {
    return {
      // returns 404 page
      notFound: true,
      // redirect: {
      //   destination: '/',
      //   permanent: false,
      // },
    }
  }

  return {
    // will be passed to the page component as props
    props: { data }, // will be passed to the page component as props
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
`,

"next getStaticPaths": `
import { useRouter } from 'next/router'

export default function Index({ data }) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  else return <div>success</div>
}

export async function getStaticPaths() {

  // fetch(posts) // returns an array of posts
  // map paths to posts
  // const paths = posts.map((post) => ({
  //   params: { id: post.id },
  // }))

  // generate at build time [id:1, id:2]
  const paths: [
    { params: { id: '1' } },
    { params: { id: '2' } }
  ],
  
  return {
    paths,
    // use router.isFallback & redirect manually or placeholder html while loads
    // if false, other routes will 404
    fallback: true // true, false, or 'blocking'
  }
}
`,

"next [id] getServerSideProps": `
export async function getServerSideProps({ query: { id }}) {
  const res = await fetch(\`https://.../\${id}\`)
  const data = await res.json()

  if (!data) {
    // return {
    //   notFound: true,
    // }
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data
    }
  }
}
`

}
]