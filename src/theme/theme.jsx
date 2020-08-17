import React, { useState, useContext } from "react";
// import { render } from "react-dom";

const ThemeContext = React.createContext("light");
const ThemeProvider = (props) => {
  const [theme, toggleTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <button
        onClick={() => {
          toggleTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
        }}
      >
        toggle theme
      </button>
      {props.children}
    </ThemeContext.Provider>
  );
}

const styles = {
  dark: {
    backgroundColor: "black",
    color: "white"
  },
  light: {
    backgroundColor: "white",
    color: "black"
  }
};

const ThemedText = () => {
  let value = useContext(ThemeContext);
  return <div style={styles[value]}>{value}</div>;
}

const AnotherThemedText = () => {
  let value = useContext(ThemeContext);
  return <div style={styles[value]}>New {value}</div>;
}

export const ToggleTheme = () => {
  let value = useContext(ThemeContext);
  return (
    <ThemeProvider theme={value}>
      <ThemedText />
      <div>
        <h1>React Hooks in-depth</h1>
        <AnotherThemedText />
      </div>
    </ThemeProvider>
  );
}

