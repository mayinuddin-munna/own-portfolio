import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

const Navbar = React.lazy(() => import('./Pages/Shared/Navbar'));
const Home = React.lazy(() => import('./Pages/Home/Home'));
const About = React.lazy(() => import('./Pages/About/About'));
const Blog = React.lazy(() => import('./Pages/Blog/Blog'));
const Contact = React.lazy(() => import('./Pages/Contact/Contact'));
const Portfolio = React.lazy(() => import('./Pages/Portfolio/Portfolio'));
const Service = React.lazy(() => import('./Pages/Service/Service'));
const Footer = React.lazy(() => import('./Pages/Shared/Footer'));

const Apis = React.lazy(() => import('./Pages/Portfolio/Apis'));
const Design = React.lazy(() => import('./Pages/Portfolio/Design'));
const ReactJs = React.lazy(() => import('./Pages/Portfolio/ReactJs'));
const VanillaJs = React.lazy(() => import('./Pages/Portfolio/VanillaJs'));
const Error = React.lazy(() => import('./Pages/Shared/Error'));
const Loading = React.lazy(() => import('./Pages/Shared/Loading'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} >
            <Route index element={<Design />} />
            <Route path="vanillaJs" element={<VanillaJs />} />
            <Route path="apis" element={<Apis />} />
            <Route path="reactJs" element={<ReactJs />} />
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter >
  );
}

export default App;
