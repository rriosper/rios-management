import { ThemeProvider } from "@xstyled/styled-components";
import React from "react";
import GlobalStyle from "./GlobalStyle";
import values from "./values";

type ThemeProps = {
  children: React.ReactNode;
};

const Theme: React.FC<ThemeProps> = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={values}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
