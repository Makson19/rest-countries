import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const SelectComponent = styled(TextField)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '6px',
  boxShadow: 'rgba(0, 0, 0, 0.031) 0px 0px 3px 3px',
  width: '100%',

  '& .MuiInputBase-root': {
    '& > .MuiInputAdornment-root': {
      color: theme.palette.primary.contrastText,
      marginRight: '25px'
    },

    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.contrastText
    },

    '& > fieldset': {
      border: 'none',
      transition: 'border 0.3s ease-in-out'
    },

    '& > .MuiSelect-select:hover ~ fieldset': {
      border: `1px solid ${theme.palette.primary.contrastText}`
    }
  }
}))
