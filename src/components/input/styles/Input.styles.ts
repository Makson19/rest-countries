import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const TextFieldComponent = styled(TextField)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '6px',
  boxShadow: 'rgba(0, 0, 0, 0.031) 0px 0px 3px 3px',
  width: '100%',

  '& .MuiInputBase-root': {
    '& > .MuiInputAdornment-root': {
      color: theme.palette.primary.contrastText,
    },

    '& > fieldset': {
      border: 'none'
    },

    '& > .MuiInputBase-input:focus ~ fieldset': {
      border: `1px solid ${theme.palette.primary.contrastText}`
    }
  }
}))
