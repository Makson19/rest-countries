import React from 'react'
import { IconButton, InputAdornment, MenuItem } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { SelectComponent } from './styles/Select.styles'

interface ISelectProps {
  clearField?: () => void;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: string, label: string }[];
  placeholder?: string;
  value: string;
  sx?: React.CSSProperties;
}

const Select: React.FC<ISelectProps> = React.memo(({
  clearField,
  name,
  onChange,
  options,
  placeholder,
  value,
  sx
}) => {
  return (
    <SelectComponent
      name={name}
      select
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      defaultValue='all'
      sx={sx}
      slotProps={{
        input: {
          endAdornment: (
            value && value !== 'all' ? (
              <InputAdornment position='end'>
                <IconButton onClick={clearField}>
                  <CloseIcon fontSize='small' />
                </IconButton>
              </InputAdornment>
            ) : null
          )
        }
      }}
    >
      {options?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option?.label}
        </MenuItem>
      ))}
    </SelectComponent>
  )
})

export default Select
