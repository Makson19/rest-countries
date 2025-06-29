import React from 'react'
import { Box } from '@mui/material'
import { BackLink } from './styles/LinkButton.styles'

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
