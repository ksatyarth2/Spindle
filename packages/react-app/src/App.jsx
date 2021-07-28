import React from "react";
import MainRouter from "./MainRouter";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const prevTheme = window.localStorage.getItem("theme");

const App = () => {

  return (
      <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || "light"}>
        <MainRouter />
      </ThemeSwitcherProvider>
  );
}

export default (App);
