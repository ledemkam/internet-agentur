import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Contact from "./pages/Contact";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "motion/react";

export default function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekt-1" element={<Project1 />} />
        <Route path="/projekt-2" element={<Project2 />} />
        <Route path="/projekt-3" element={<Project3 />} />
        <Route path="/projekt-4" element={<Project4 />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </AnimatePresence>
  )
}
