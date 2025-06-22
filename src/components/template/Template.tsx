import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Header from '../header/Header'

const LayoutContainer = styled(Box)(() => ({
  height: '100%'
}))

const Template = () => {
  return (
    <LayoutContainer>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </LayoutContainer>
  )
}

export default Template
