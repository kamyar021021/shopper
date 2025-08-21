"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const DarkThemeProvider = ({ children }: Props) => {

  const theme = createTheme({
    palette: {
      primary: { main: "#1e90ff" },
      secondary: { main: "#ff4081" },
      background: {
        default: "#f0f2f5",
        paper: "#fff",
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif, Tanha",
    },
    shape: { borderRadius: 8 },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
