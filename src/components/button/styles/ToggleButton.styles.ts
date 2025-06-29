import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ToggleBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'capitalize'
}))
