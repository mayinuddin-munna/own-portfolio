/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components
import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = React.lazy(() => import("./App.jsx"));
const About = React.lazy(() => import("./Pages/About/About.jsx"));
const Services = React.lazy(() => import("./Pages/Services/Services.jsx"));
const Portfolio = React.lazy(() => import("./Pages/Portfolio/Portfolio.jsx"));
const Blog = React.lazy(() => import("./Pages/Blog/Blog.jsx"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact.jsx"));
const Error = React.lazy(() => import("./Pages/Shared/Error/Error"));
const Loading = React.lazy(() => import("./Components/Loading"));
const Home = React.lazy(() => import("./Pages/Home/Home/Home"));
const ThemeContext = React.lazy(() => import("./providers/ThemeContext"));
const AllProjects = React.lazy(() => import("./Pages/Portfolio/AllProjects"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/allProjects",
        element: <AllProjects />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <ThemeContext>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeContext>
    </Suspense>
  </React.StrictMode>
);
