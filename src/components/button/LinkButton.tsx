import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'


const BackLink = styled(Link)(({ theme }) => ({
  alignItems: 'center',
  background: theme.palette.background.paper,
  borderRadius: '6px',
  boxShadow: theme.palette.mode === 'light'
    ? '0px 0px 3px 3px rgba(0, 0, 0, 0.03)'
    : '0px 7px 6px -4px rgba(9, 9, 9, 0.27)',
  color: theme.palette.primary.contrastText,
  display: 'flex',
  gap: '8px',
  padding: '6px 32px',
  textDecoration: 'none',
  transition: 'background 0.3s ease-in-out',
  width: 'fit-content',

  '&:hover': {
    background: theme.palette.background.default
  }
}))

interface ILinkButtonProps {
  icon?: React.ReactNode;
  text: string;
  to: string;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  icon,
  text,
  to
}) => {
  return (
    <BackLink to={to}>
      {icon}
      <Box
        component='span'
        className='label'
      >
        {text}
      </Box>
    </BackLink>
  )
}

export default LinkButton
