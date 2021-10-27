export default [
{

"file readme": `
// custom preconfigration + example

git clone https://github.com/drmatt13/tailwind-starter-next-basic.git
git clone https://github.com/drmatt13/tailwind-starter-next-example.git
`,

"cmd": `
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
`,

"javascript tailwind.config.js": `
// tailwind.config.js
module.exports = {
  // mode: 'jit',
  purge: [], // ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
`,

"javascript postcss.config.js": `
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`,

"next _app.js": `
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
`,

},

{

"next initializeDarkMode": `
// initalize dark mode and store state in localStorage

const [darkMode, setDarkMode] = useState()

useEffect(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
    setDarkMode(true)
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
    setDarkMode(false)
  }
}, [])
`,

"next toggleDarkMode": `
const toggleDarkMode = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
    setDarkMode(false)
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
    setDarkMode(true)
  }
}
`

}
]