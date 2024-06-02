import {createContext, useContext, useState, useEffect} from 'react'

const AppContext = createContext()

const getInitialDarkMode = () => {
    //get the preferred windows dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    //get app dark mode if it exist
    const storedDarkMode = localStorage.getItem('darkTheme');
 
    // if app dark mode is null, then return windows dark mode
    if (storedDarkMode === null) {
        return prefersDarkMode;
    }
 
    //else return true for app dark mode
    return storedDarkMode === 'true';
};

export const AppProvider = ({children}) => {
    //use state to set dark mode
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())

    // use state to set default search item
    const [searchTerm, setSearchTerm] = useState('goose')

    //function to toggle dark mode
    const toggleDarkTheme = () => {
        // inverse dark mode
        const newDarkTheme = !isDarkTheme

        setIsDarkTheme(newDarkTheme)
        
        // toggles dark theme
        document.querySelector('body').classList.toggle('dark-theme', newDarkTheme)

        //saves dark mode
        localStorage.setItem('darkTheme', newDarkTheme)
    }

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme)
    }, [])

    return (
        <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}> {children}</AppContext.Provider>
    )

}

export const useGlobalContext = () => useContext(AppContext)