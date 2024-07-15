// Only one file needed for 1 context in this way of writing context. However, we can definitely use the previous way i.e. 08_miniContext but this is more adopted approach.

import { createContext, useContext } from "react";
import React from "react";

const ThemeContext = createContext({
    // we can directly pass the data within the context -> in the previous setting User: {password, username}, we had to use setUser method in Login component. here only directly inject data
    themeMode: "ligth",
    darkTheme: () => {},
    lightTheme: () => {},
});

// Optional: instead of writing <ThemContext.Provider> in App.jsx sanwich model. 
export const ThemeProvider = ThemeContext.Provider;

// Custom hook: such that data inside the ThemeContext->themeMode, darkTheme, lightTheme can be accessed anywhere.
export default function useTheme() {
    return useContext(ThemeContext)
}