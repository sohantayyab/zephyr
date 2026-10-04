import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="mx-auto max-w-md px-6 pb-24 pt-44 text-center">
      <h1 className="text-aurora font-display text-8xl font-bold">404</h1>
      <p className="mt-4 text-lg text-slate-400">
        This page drifted away on the wind.
      </p>
    </div>
  );
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col">
      <Background />
      <CursorGlow />
      <ScrollToTop />
      <Navbar />

      <main className="relative z-10 flex-1">
        <div key={pathname} className="page-enter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}