import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import ToggleButton from '../button/ToggleButton'

const HeaderContainer = styled('header')(({ theme }) => ({
  background: theme.palette.background.paper,

  '& > .navbar': {
    alignItems: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.031) 0px 0px 3px 3px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '24px 48px',

    '& > .nav_link': {
      textDecoration: 'none',

      '& > .logo': {
        color: theme.palette.primary.contrastText,
        fontSize: '24px',
        fontWeight: 800,
      }
    }
  }
}))

const Header = () => {
  return (
    <HeaderContainer>
      <nav className='navbar'>
        <Link to='/' className='nav_link'>
          <Typography component='h1' className='logo'>
            Where in the world?
          </Typography>
        </Link>

        <ToggleButton />
      </nav>
    </HeaderContainer>
  )
}

export default Header
