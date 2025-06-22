/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { Box, ThemeProvider } from '@mui/material'
import { LightTheme } from '../themes/Light'
import { DarkTheme } from '../themes/Dark'

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData)

const useAppThemeContext = () => {
  return useContext(ThemeContext)
}

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setThemeName(prevState => prevState === 'light' ? 'dark' : 'light')
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') {
      return LightTheme
    }
    return DarkTheme
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            background: theme.palette.background.default,
            minHeight: '100vh',
            width: '100vw',
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export {
  AppThemeProvider,
  useAppThemeContext
}
