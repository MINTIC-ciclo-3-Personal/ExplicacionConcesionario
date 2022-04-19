import { createContext, useContext } from "react";

export const DarkModeContex=createContext(null);

export const useDarkMode =()=> {
    return useContext(DarkModeContex);
}

