import { FC } from "react";
import { GlobalStyle } from "../theme";
import { CustomThemeContextProvider } from "./CustomThemeContext";
import { DefaultContextProvider } from "./DefaultContext";

export const ContextRender: FC = ({ children }) => {
  return (
    <DefaultContextProvider>
      <CustomThemeContextProvider>
        <GlobalStyle />
        {children}
      </CustomThemeContextProvider>
    </DefaultContextProvider>
  );
};
