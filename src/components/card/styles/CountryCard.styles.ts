import { Card } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CardContainer = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  boxShadow: theme.palette.mode === 'light'
    ? '0px 0px 3px 3px rgba(0, 0, 0, 0.03)'
    : '0px 7px 6px -4px rgba(9, 9, 9, 0.27)',
  transition: 'transform 0.3s ease-in-out',

  '& > .country_image': {
    height: '150px'
  },

  '& > .country': {
    padding: '24px 16px 40px !important',

    '& .country_name': {
      fontSize: '16px',
      fontWeight: 800,
      marginBottom: '12px',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    '& .country_info': {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',

      '& .info': {
        alignItems: 'center',
        display: 'flex',
        gap: '4px',

        '& .label': {
          fontSize: '14px',
          fontWeight: 600,
        },

        '& .value': {
          fontSize: '14px',
          fontWeight: 300,
        }
      }
    }
  },

  '&:hover': {
    transform: 'scale(1.05)',
  },

  [theme.breakpoints.down(900)]: {
    '& > .country_image': {
      backgroundSize: 'cover',
      height: '200px',
    }
  }
}))
