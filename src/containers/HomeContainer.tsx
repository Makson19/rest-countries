import { useCallback, useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import http from '../services/https'
import type { ICountry } from '../models/ICountry'
import { slicer } from '../utils/functions'
import CountryCard from '../components/card/CountryCard'

const HomeContainer = () => {
  const [countries, setCountries] = useState<Array<ICountry[]>>([])
  const [page, setPage] = useState(1)
  console.log('countries', countries)

  const fetchCountries = useCallback(async () => {
    try {
      const response = await http.get('/all?fields=name,flags,population,region,capital')
      console.log('response', response.data.length)

      const data = slicer<ICountry>(response.data, 8)
      setCountries(data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries])
  return (
    <Box className='container'>
      <Grid
        container
        rowSpacing={8}
        columnSpacing={8}
      >
        {countries?.[page]?.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 3 }}
          >
            <CountryCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default HomeContainer
