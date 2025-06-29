import React from 'react'
import { InputAdornment } from '@mui/material'
import { TextFieldComponent } from './styles/Input.styles'

interface InputProps {
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  startIcon?: React.ReactNode;
  type?: string;
  value: string;
  sx?: React.CSSProperties;
}

const Input: React.FC<InputProps> = React.memo(({
  name,
  onChange,
  placeholder,
  startIcon,
  type = 'text',
  value,
  sx
}) => {
  return (
    <TextFieldComponent
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete='off'
      sx={sx}
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
