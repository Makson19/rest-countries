import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useAppThemeContext } from '../../contexts/ThemeContext'
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const ToggleBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'capitalize'
}))

const ToggleButton = () => {
  const { themeName, toggleTheme } = useAppThemeContext()

  return (
    <ToggleBtn
      className='toggle_button'
      onClick={toggleTheme}
      startIcon={themeName === 'light'
        ? <BedtimeOutlinedIcon />
        : <Brightness7Icon />
      }
    >
      {themeName === 'light' ? 'Dark mode' : 'Light mode'}
    </ToggleBtn>
  )
}

export default ToggleButton
