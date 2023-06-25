import Header from "./components/Header";
import ContGameCard from "./layouts/ContGameCard";
import { Routes, Route } from "react-router-dom";
import Info from "./pages/Info";
import Screenshots from "./pages/Screenshots";
import Trailers from "./pages/Trailers";
import { lightTheme, darkTheme } from "./globalStyle/theme";
import { GlobalStyles } from "./globalStyle/globalStyle";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";


function App() {
  const [isChangedTheme, setIsChangedTheme] = useState("");

  const setColor = (color) => {
    localStorage.setItem("color", color);
  };

  useEffect(() => {
    setIsChangedTheme(localStorage.getItem('color'))
  }, []);

  const handleTheme = (e) => {
    setColor(e.target.value);
    setIsChangedTheme(localStorage.getItem('color'))
    localStorage.getItem('color')
  };

  //https://api.rawg.io/api/games?key=fe385adcc8ed4097a39408a38f7c248b
  return (
    <ThemeProvider theme={isChangedTheme === 'dark' ? darkTheme : lightTheme}>
    <>
    <GlobalStyles/>
      <Header handleToggle={handleTheme} selected={localStorage.getItem('color')} />
      <Routes>
        <Route path="/" element={<ContGameCard />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/screenshots/:id" element={<Screenshots />} />
        <Route path="/movies/:id" element={<Trailers />} />
      </Routes>
    </>
    </ThemeProvider>
  );
}

export default App;
