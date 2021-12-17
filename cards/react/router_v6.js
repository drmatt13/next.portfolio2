export default [
  {
    cmd: `npm install react-router-dom`,
    "react Router.js": `
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const app = ({props}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Component />} />
      </Routes>
    </Router>
  );
};

export default app;
    `,

    "react Link.js": `
import { Link, useNavigate, useEffect } from "react-router-dom";

function Home({ redirect=false }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) navigate("/route");
  }, [redirect])

  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export default Home;
`,

    "react Outlet.js": `
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useParams
} from "react-router-dom";

const app = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          // nested routes are rendered inside parent via Outlet
          <Route index element={<Home />} />
          <Route path="/:route" element={<Route />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const NotFound = () => {
  return <h1>Not found</h1>
}

const Layout = () => {
  return <>
    <nav>
      nav
    </nav>
    <div className="layout">
      // render children Routes
      <Outlet />
    </div>
  </>
}

const Home = () => {
  return <h1>Home</h1>
}

const Route = () => {
  const { route } = useParams();
  return <h1>{route}</h1>
}

export default app;
`,
  },
];
