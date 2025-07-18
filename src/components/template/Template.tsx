import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Header from '../header/Header'

const LayoutContainer = styled(Box)(() => ({
  height: '100%',

  '& #content': {
    minHeight: 'calc(100vh - 84.5px)'
  }
}))

const Template = () => {
  return (
    <LayoutContainer>
      <Header />
      <Box id='content'>
        <Outlet />
      </Box>
    </LayoutContainer>
  )
}

export default Template
