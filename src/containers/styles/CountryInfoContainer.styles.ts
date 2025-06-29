import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CountryContainer = styled(Box)(({ theme }) => ({
  '& > .btn_container': {
    marginBlock: '64px'
  },

  '& > .country': {
    columnGap: '16px',
    display: 'grid',
    gridTemplateAreas: `'flag info' 'flag border'`,
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',

    '& .country_flag': {
      alignSelf: 'center',
      gridArea: 'flag',

      '& .flag': {
        height: '400px',
        maxWidth: '600px',

        '& > img': {
          height: '100%',
          width: '100%'
        }
      }
    },

    '& .country_info': {
      gridArea: 'info',

      '& .country_name': {
        fontSize: '32px',
        fontWeight: 800,
        marginBottom: '24px'
      },

      '& .grid': {
        '& .column': {
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }
      },

      '& .info': {
        display: 'flex',
        gap: '4px',
        fontSize: '16px',

        '& > .label': {
          fontWeight: 600,
          whiteSpace: 'nowrap'
        },

        '& > .value': {
          fontWeight: 300,
        }
      }
    },

    '& .country_borders': {
      marginTop: '52px',
      gridArea: 'border',

      '& > .info': {
        display: 'flex',
        gap: '8px',
        '& > .label': {
          fontWeight: 600,
          marginTop: '6px',
          whiteSpace: 'nowrap'
        }
      },

      '& .borders': {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px'
      }
    }
  },

  [theme.breakpoints.down(1240)]: {
    '& > .btn_container': {
      margin: '32px 0'
    },

    '& > .country': {
      columnGap: '24px',
      gridTemplateAreas: `'flag info' 'border border'`,

      '& .country_flag': {
        alignSelf: 'flex-start',

        '& .flag': {
          width: '500px'
        }
      },

      '& > .country_info': {
        alignSelf: 'center',
        '& .country_name': {
          marginBottom: '16px',
        }
      },

      '& > .country_borders': {
        marginTop: '16px',
      }
    }
  },

  [theme.breakpoints.down(900)]: {
    '& > .country': {
      gridTemplateAreas: `'flag' 'info' 'border'`,
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(3, auto)',
      rowGap: '32px',

      '& .country_flag': {
        '& .flag': {
          maxWidth: '100%',
          width: '100%'
        }
      }
    }
  },

  [theme.breakpoints.down(600)]: {
    '& > .country': {
      gridTemplateAreas: `'flag' 'info' 'border'`,
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(3, auto)',
      rowGap: '32px',

      '& .country_flag': {
        '& .flag': {
          height: '100%',
          width: '100%'
        }
      },

      '& .country_info': {
        '& .country_name': {
          fontSize: '24px'
        }
      },

      '& .country_borders': {
        '& > .info': {
          flexDirection: 'column',
          gap: '16px',
        }
      }
    }
  }
}))
