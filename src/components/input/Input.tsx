import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const TextFieldComponent = styled(TextField)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '6px',
  boxShadow: 'rgba(0, 0, 0, 0.031) 0px 0px 3px 3px',
  maxWidth: '450px',
  width: '100%',

  '& .MuiInputBase-root': {
    '& > .MuiInputAdornment-root': {
      color: theme.palette.primary.contrastText,
    },

    '& > fieldset': {
      border: 'none'
    }
  }
}))

interface InputProps {
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  startIcon?: React.ReactNode;
  type?: string;
  value: string;
}

const Input: React.FC<InputProps> = React.memo(({
  name,
  onChange,
  placeholder,
  startIcon,
  type = 'text',
  value
}) => {
  return (
    <TextFieldComponent
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position='start'>
              {startIcon}
            </InputAdornment>
          )
        }
      }}
    />
  )
})

export default Input
