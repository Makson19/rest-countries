/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { Box, CircularProgress, Grid, Pagination } from '@mui/material'
import CountryCard from '../components/card/CountryCard'
import Input from '../components/input/Input'
import Select from '../components/select/Select'
import http from '../services/https'
import { slicer } from '../utils/functions'
import type { ICountry } from '../models/ICountry'
import SearchIcon from '@mui/icons-material/Search'
import { Container, LinkComponent } from './styles/HomeContainer.styles'

const perPage = 8

const HomeContainer = () => {
  const [countryName, setCountryName] = useState('')
  const [region, setRegion] = useState('all')
  const [countries, setCountries] = useState<Array<ICountry[]>>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
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
    setIsLoading(false)
  }, 500), [])

  const getCountriesByRegion = useCallback(async (region: string) => {
    setIsLoading(true)
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
    setIsLoading(false)
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

  return (
    <Box className='container'>
      <Container>
        <Box className='filters'>
          <Box className='filter_by_name'>
            <Input
              name='search_country_by_name'
              placeholder='Search for a country'
              value={countryName}
              onChange={handleSearchCountryByName}
              startIcon={<SearchIcon />}
            />
          </Box>

          <Box className='filter_by_region'>
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
        </Box>

        {isLoading && (
          <Box className='loading_container'>
            <CircularProgress color='secondary' size={45} />
          </Box>
        )}

        {!isLoading && (
          <Grid
            container
            rowSpacing={{ xs: 4, xl: 8 }}
            columnSpacing={{ xs: 4, xl: 8 }}
          >
            {countries?.[page - 1]?.map((item, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
                <LinkComponent to={`/${item.name.common.toLowerCase()}`}>
                  <CountryCard data={item} />
                </LinkComponent>
              </Grid>
            ))}
          </Grid>
        )}

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
