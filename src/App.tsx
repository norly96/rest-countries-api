import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

interface ThemeContextType {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialTheme = document.documentElement.className.includes("dark");
export const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => {},
});

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(initialTheme);

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
      <main className="h-screen font-nunito bg-background-light dark:bg-background-dark">
        <Header />
        <Home />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
