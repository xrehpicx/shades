import { createContext, FC } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CustomThemeContextProps } from "../types";
import { defaultTheme } from "../theme";

// import { useWantCode } from "../hooks/useWantCode";

export const CustomThemeContext = createContext<CustomThemeContextProps>(
  {} as CustomThemeContextProps
);

function getTheme() {
  return defaultTheme;
}

export const CustomThemeContextProvider: FC = ({ children }) => {
  const theme = getTheme();

  return (
    <CustomThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
