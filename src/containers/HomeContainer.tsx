import { useCallback, useEffect, useState } from 'react'
import { Box, Grid, Pagination } from '@mui/material'
import { styled } from '@mui/material/styles'
import http from '../services/https'
import type { ICountry } from '../models/ICountry'
import { slicer } from '../utils/functions'
import CountryCard from '../components/card/CountryCard'
import Loading from '../components/loading/Loading'

const Container = styled(Box)(() => ({
  '& > .pagination': {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '24px'
  }
}))

const HomeContainer = () => {
  const [countries, setCountries] = useState<Array<ICountry[]>>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  console.log('countries', countries)

  const fetchCountries = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await http.get('/all?fields=name,flags,population,region,capital')
      console.log('response', response.data.length)

      const data = slicer<ICountry>(response.data, 8)
      setCountries(data)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }, [])

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Box className='container'>
      <Container>
        <Grid
          container
          rowSpacing={8}
          columnSpacing={8}
        >
          {countries?.[page - 1]?.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 3 }}
            >
              <CountryCard data={item} />
            </Grid>
          ))}
        </Grid>

        <Box className='pagination'>
          <Pagination
            count={countries?.length}
            size='small'
            page={page}
            onChange={handleChangePage}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default HomeContainer
