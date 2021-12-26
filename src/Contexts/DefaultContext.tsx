import { createContext, FC } from "react";
import { DefaultContextProps } from "../types";

// import { useWantCode } from "../hooks/useWantCode";

export const DefaultContext = createContext<DefaultContextProps>(
  {} as DefaultContextProps
);

export const DefaultContextProvider: FC = ({ children }) => {
  return (
    <DefaultContext.Provider value={{}}>{children}</DefaultContext.Provider>
  );
};
