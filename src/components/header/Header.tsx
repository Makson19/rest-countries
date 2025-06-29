import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import ToggleButton from '../button/ToggleButton'
import { HeaderContainer } from './styles/Header.styles'

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
