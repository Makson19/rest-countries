import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import type { ICountry } from '../../models/ICountry'

const CardContainer = styled(Card)(() => ({
  borderRadius: '8px',
  boxShadow: 'rgba(0, 0, 0, 0.031) 0px 0px 3px 3px',

  '& > .country_image': {
    height: '150px'
  },

  '& > .country': {
    padding: '24px 16px 40px',

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
  }
}))

interface ICountryCardProps {
  data: ICountry;
}

const CountryCard: React.FC<ICountryCardProps> = ({ data }) => {
  return (
    <CardContainer>
      <CardMedia
        image={data.flags.svg}
        title={data.flags.alt}
        className='country_image'
      />
      <CardContent className='country'>
        <Typography
          component='h4'
          className='country_name'
          title={data.name.common}
        >
          {data.name.common}
        </Typography>

        <Box className='country_info'>
          <Box className='info'>
            <Box
              component='span'
              className='label'
            >
              Population:
            </Box>
            <Box
              component='span'
              className='value'
            >
              {data.population.toLocaleString()}
            </Box>
          </Box>

          <Box className='info'>
            <Box
              component='span'
              className='label'
            >
              Region:
            </Box>
            <Box
              component='span'
              className='value'
            >
              {data.region}
            </Box>
          </Box>

          <Box className='info'>
            <Box
              component='span'
              className='label'
            >
              Capital:
            </Box>
            <Box
              component='span'
              className='value'
            >
              {data.capital?.map(item => item)}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </CardContainer>
  )
}

export default CountryCard
