import React, { createContext } from 'react'

export const ThemeContext=createContext({
    theme:'light',
    toggleTheme:()=>{}
})

export function themeProvider({children}){
    const [theme,setTheme]=useState('light');
    const toggleTheme=()=>{
        setTheme(prev=>prev==='light' ? 'dark':'light');
    }
    const value={
        theme,
        toggleTheme,
    }
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
