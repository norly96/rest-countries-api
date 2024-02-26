import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { ThemeContext } from "./context/ThemeContext";
import { CountryContext } from "./context/CountryContext";

const initialTheme = document.documentElement.className.includes("dark");

function App():JSX.Element {
  const [darkTheme, setDarkTheme] = useState<boolean>(initialTheme);
  const [countries, setCountries] = useState<[]>([])

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <CountryContext.Provider value={{ countries, setCountries}}>
        <main className="h-screen font-nunito">
        <Header />
        <Home />
      </main>
      </CountryContext.Provider>
    </ThemeContext.Provider>
      
    
  );
}

export default App;
