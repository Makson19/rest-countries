import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'

export const Container = styled(Box)(({ theme }) => ({
  '& > .filters': {
    alignItems: 'center',
    display: 'flex',
    gap: '16px',
    justifyContent: 'space-between',
    marginBlock: '40px',

    '& .filter_by_name': {
      maxWidth: '450px',
      width: '100%'
    },

    '& .filter_by_region': {
      maxWidth: '260px',
      width: '100%',
    }
  },

  '& > .loading_container': {
    display: 'flex',
    justifyContent: 'center',
    paddingBlock: '24px'
  },

  '& > .pagination': {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '24px'
  },

  [theme.breakpoints.down(900)]: {
    '& > .filters': {
      '& .filter_by_name': {
        flex: 1,
        maxWidth: '100%'
      },

      '& .filter_by_region': {
        flex: 1,
        maxWidth: '100%'
      }
    }
  },

  [theme.breakpoints.down(600)]: {
    '& > .filters': {
      alignItems: 'flex-start',
      flexDirection: 'column',
      gap: '40px',

      '& .filter_by_region': {
        maxWidth: '50%'
      }
    }
  }
}))

export const LinkComponent = styled(Link)(() => ({
  textDecoration: 'none',
}))
