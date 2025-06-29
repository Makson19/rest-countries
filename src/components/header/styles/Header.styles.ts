import { styled } from '@mui/material/styles'

export const HeaderContainer = styled('header')(({ theme }) => ({
  background: theme.palette.background.paper,

  '& > .navbar': {
    alignItems: 'center',
    boxShadow: theme.palette.mode === 'light'
      ? '0px 0px 3px 3px rgba(0, 0, 0, 0.03)'
      : '0px 7px 6px -4px rgba(9, 9, 9, 0.27)',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '24px 48px',

    '& > .nav_link': {
      textDecoration: 'none',

      '& > .logo': {
        color: theme.palette.primary.contrastText,
        fontSize: '24px',
        fontWeight: 800,
      }
    }
  },

  [theme.breakpoints.down(600)]: {
    '& > .navbar': {
      padding: '24px 16px',
      '& > .nav_link': {
        '& > .logo': {
          fontSize: '16px'
        }
      }
    }
  }
}))
