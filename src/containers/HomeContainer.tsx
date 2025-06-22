/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { debounce } from 'lodash'
import { Box, Grid, Pagination } from '@mui/material'
import CountryCard from '../components/card/CountryCard'
import Input from '../components/input/Input'
import Loading from '../components/loading/Loading'
import SearchIcon from '@mui/icons-material/Search'
import http from '../services/https'
import { slicer } from '../utils/functions'
import type { ICountry } from '../models/ICountry'

const Container = styled(Box)(() => ({
  '& > .filters': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginBlock: '40px'
  },

  '& > .pagination': {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '24px'
  }
}))

const HomeContainer = () => {
  const [countryName, setCountryName] = useState('')
  const [countries, setCountries] = useState<Array<ICountry[]>>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  console.log('countryName', countryName)

  const fetchCountries = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await http.get('/all?fields=name,flags,population,region,capital')
      const data = slicer<ICountry>(response.data, 8)
      setCountries(data)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }, [])

  const getCountryByName = useCallback(debounce(async (name: string) => {
    try {
      const response = await http.get(`/name/${name}`)
      const normalizeData: ICountry[] = response.data?.map((country: ICountry) => ({
        capital: country?.capital,
        flags: country?.flags,
        name: country?.name,
        population: country?.population,
        region: country?.region
      }))

      const data = slicer<ICountry>(normalizeData, 8)
      setCountries(data)
    } catch (error) {
      console.error(error)
    }
  }, 500), [])

  const handleSearchCountryByName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCountryName(value)
    if (value.length > 0) {
      getCountryByName(value)
    } else {
      fetchCountries()
    }
  }

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Box className='container'>
      <Container>
        <Box className='filters'>
          <Input
            name='search_country'
            placeholder='Search for a country'
            value={countryName}
            onChange={handleSearchCountryByName}
            startIcon={<SearchIcon />}
          />
        </Box>

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

        {countries?.length > 1 && (
          <Box className='pagination'>
            <Pagination
              count={countries?.length}
              size='small'
              page={page}
              onChange={handleChangePage}
            />
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default HomeContainer
