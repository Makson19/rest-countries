import { createTheme } from '@mui/material'

export const DarkTheme = createTheme({
  typography: {
    fontFamily: 'Nunito Sans, sans-serif'
  },
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(209, 23%, 22%)',
      contrastText: 'hsl(0, 100%, 100%)',
    },
    secondary: {
      main: 'hsl(0, 100%, 100%)'
    },
    text: {
      primary: 'hsl(0, 100%, 100%)'
    },
    background: {
      default: 'hsl(207, 26%, 17%)',
      paper: 'hsl(209, 23%, 22%)'
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1240,
      xl: 1440
    }
  }
})
