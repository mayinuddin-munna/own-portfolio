/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components
import "./index.css";
import React, { Suspense, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
const App = React.lazy(() => import("./App.jsx"));
const About = React.lazy(() => import("./Pages/About/About.jsx"));
const Services = React.lazy(() => import("./Pages/Services/Services.jsx"));
const Portfolio = React.lazy(() => import("./Pages/Portfolio/Portfolio.jsx"));
const Blog = React.lazy(() => import("./Pages/Blog/Blog.jsx"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact.jsx"));
const Error = React.lazy(() => import("./Pages/Shared/Error/Error"));
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./Pages/Shared/Loading/Loading";
import Home from "./Pages/Home/Home/Home";
import ThemeContext from "./providers/ThemeContext";
import CssBaseline from '@mui/material/CssBaseline';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
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
