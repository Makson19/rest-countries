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
import Select from '../components/select/Select'

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

const perPage = 8

const HomeContainer = () => {
  const [countryName, setCountryName] = useState('')
  const [region, setRegion] = useState('all')
  const [countries, setCountries] = useState<Array<ICountry[]>>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  // console.log('countryName', countryName)
  // console.log('region', region)

  const fetchCountries = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await http.get('/all?fields=name,flags,population,region,capital')
      const data = slicer<ICountry>(response.data, perPage)
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

      const data = slicer<ICountry>(normalizeData, perPage)
      setCountries(data)
    } catch (error) {
      console.error(error)
    }
  }, 500), [])

  const getCountriesByRegion = useCallback(async (region: string) => {
    try {
      const response = await http.get(`/region/${region}`)
      const normalizeData: ICountry[] = response.data?.map((country: ICountry) => ({
        capital: country?.capital,
        flags: country?.flags,
        name: country?.name,
        population: country?.population,
        region: country?.region
      }))

      const data = slicer<ICountry>(normalizeData, perPage)
      setCountries(data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleSearchCountryByName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCountryName(value)
    if (value.length === 0) {
      fetchCountries()
    } else {
      getCountryByName(value)
    }
  }

  const handleSearchCountriesByRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setRegion(value)
    if (value === 'all') {
      fetchCountries()
    } else {
      getCountriesByRegion(value)
    }
  }

  const clearSearchCountryByRegion = () => {
    setRegion('all')
    fetchCountries()
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
            name='search_country_by_name'
            placeholder='Search for a country'
            value={countryName}
            onChange={handleSearchCountryByName}
            startIcon={<SearchIcon />}
          />

          <Select
            name='search_country_by_region'
            placeholder='Filter by Region'
            value={region}
            onChange={handleSearchCountriesByRegion}
            clearField={clearSearchCountryByRegion}
            options={[
              { value: 'all', label: 'Filter by Region' },
              { value: 'africa', label: 'Africa' },
              { value: 'america', label: 'America' },
              { value: 'asia', label: 'Asia' },
              { value: 'europe', label: 'Europa' },
              { value: 'oceania', label: 'Oceania' }
            ]}
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
