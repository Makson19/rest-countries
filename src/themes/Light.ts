import { createTheme } from '@mui/material'

export const LightTheme = createTheme({
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(0, 100%, 100%)',
      dark: 'hsl(0, 0%, 50%)',
      light: 'hsl(200, 15%, 8%)',
      contrastText: 'hsl(200, 15%, 8%)'
    },
    secondary: {
      main: 'hsl(200, 15%, 8%)'
    },
    text: {
      primary: 'hsl(200, 15%, 8%)'
    },
    background: {
      default: 'hsl(0, 0%, 99%)',
      paper: 'hsl(0, 100%, 100%)'
    }
  }
})
