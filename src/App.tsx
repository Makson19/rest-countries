import { RouterProvider } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { AppThemeProvider } from './contexts/ThemeContext'
import { router } from './routes'

function App() {

  return (
    <>
      <AppThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </AppThemeProvider>
    </>
  )
}

export default App
