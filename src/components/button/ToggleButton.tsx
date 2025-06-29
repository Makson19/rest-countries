import { useAppThemeContext } from '../../contexts/ThemeContext'
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ToggleBtn } from './styles/ToggleButton.styles'

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
