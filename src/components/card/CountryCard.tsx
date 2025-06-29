import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import type { ICountry } from '../../models/ICountry'
import { CardContainer } from './styles/CountryCard.styles'

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
