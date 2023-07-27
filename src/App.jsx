import React from "react";
import { useEffect, useState } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

function App() {
  const [theme, setTheme] = useState(null);
  const [open, setOpen] = useState(false);
  const themeChange = () => {
    setTheme(theme == "dark" ? "light" : "dark");
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefer-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  //bg-[#e0d2b4] bg-gradient-to-r from-[#e0d2b4] via-[#e2ac6b] to-[#e2ac6b] dark:bg-[#212121] dark:bg-gradient-to-r dark:from-black dark:via-gray-500 dark:to-gray-700
  return (
    <Flowbite>
      {/* <DarkThemeToggle /> */}
      <div className="dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 bg-gradient-to-r from-teal-200 to-teal-500">
        <Header
          themeChange={themeChange}
          open={open}
          handleClick={handleClick}
        />
        <main>
          <Hero handleClick={handleClick} />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </Flowbite>
  );
}

export default App;
