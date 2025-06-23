import React from 'react'
import { IconButton, InputAdornment, MenuItem, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'

const SelectComponent = styled(TextField)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '6px',
  boxShadow: 'rgba(0, 0, 0, 0.031) 0px 0px 3px 3px',
  maxWidth: '260px',
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
      border: 'none'
    }
  }
}))

interface ISelectProps {
  clearField?: () => void;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: string, label: string }[];
  placeholder?: string;
  value: string;
}

const Select: React.FC<ISelectProps> = React.memo(({
  clearField,
  name,
  onChange,
  options,
  placeholder,
  value
}) => {
  return (
    <SelectComponent
      name={name}
      select
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      defaultValue='all'
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
