import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'
import http from '../services/https'
import type { ICountryInfo } from '../models/ICountry'
import LinkButton from '../components/button/LinkButton'
import Loading from '../components/loading/Loading'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { CountryContainer } from './styles/CountryInfoContainer.styles'

const CountryInfoContainer = () => {
  const { country } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<ICountryInfo>({} as ICountryInfo)
  const [borders, setBorders] = useState<(string | undefined)[]>([])

  const findBorders = useCallback(async (border: string) => {
    try {
      const response = await http.get(`/alpha/${border.toLowerCase()}`)
      const data: ICountryInfo = response.data?.reduce((acc: ICountryInfo, item: ICountryInfo) => ({ ...acc, ...item }))
      return data?.name?.common
    } catch (error) {
      console.error(error)
    }
  }, [])

  const fetchCountryByName = useCallback(async (countryName: string) => {
    setIsLoading(true)
    try {
      const response = await http.get(`/name/${countryName}?fullText=true`)
      const data: ICountryInfo = response.data?.reduce((acc: ICountryInfo, item: ICountryInfo) => ({ ...acc, ...item }))
      setData(data)

      const borderPromises = (data.borders ?? []).map(border => findBorders(border))
      const borderNames = await Promise.all(borderPromises)
      setBorders(borderNames)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }, [findBorders])

  useEffect(() => {
    if (country) {
      const countryName = country.toLowerCase()
      fetchCountryByName(countryName)
    }
  }, [country, fetchCountryByName])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Box className='container'>
      <CountryContainer>
        <Box className='btn_container'>
          <LinkButton
            to='/'
            text='Back'
            icon={<KeyboardBackspaceIcon fontSize='small' />}
          />
        </Box>

        <Box className='country'>
          <Box className='country_flag'>
            <Box className='flag'>
              <img
                src={data?.flags?.svg}
                alt={data?.flags?.alt}
                loading='lazy'
              />
            </Box>
          </Box>

          <Box className='country_info'>
            <Typography
              component='h2'
              className='country_name'
            >
              {data?.name?.common}
            </Typography>

            <Grid
              container
              className='grid'
              rowGap={{ xs: 4, lg: 0 }}
            >
              <Grid
                size={{ xs: 12, sm: 6, md: 12, lg: 6 }}
                className='column'
              >
                <Box className='info'>
                  <Box
                    className='label'
                    component='span'
                  >
                    Native Name:
                  </Box>

                  <Box
                    className='value'
                    component='span'
                  >
                    {Object.keys(data).length > 0 && Object?.keys(data?.languages)?.map((item: string) => data?.name?.nativeName?.[item]?.common)?.join(', ')}
                  </Box>
                </Box>

                <Box className='info'>
                  <Box
                    className='label'
                    component='span'
                  >
                    Population:
                  </Box>

                  <Box
                    className='value'
                    component='span'
                  >
                    {data?.population?.toLocaleString()}
                  </Box>
                </Box>

                <Box className='info'>
                  <Box
                    className='label'
                    component='span'
                  >
                    Region:
                  </Box>

                  <Box
                    className='value'
                    component='span'
                  >
                    {data?.region}
                  </Box>
                </Box>

                <Box className='info'>
                  <Box
                    className='label'
                    component='span'
                  >
                    Sub Region:
                  </Box>

                  <Box
                    className='value'
                    component='span'
                  >
                    {data?.subregion}
                  </Box>
                </Box>

                <Box className='info'>
                  <Box
                    className='label'
                    component='span'
                  >
                    Capital:
                  </Box>

                  <Box
                    className='value'
                    component='span'
                  >
                    {data?.capital}
                  </Box>
                </Box>
              </Grid>

              <Grid
                size={{ xs: 12, sm: 6, md: 12, lg: 6 }}
                className='column'
              >
                <Box className='info'>
                  <Box
                    className='label'
                    component='span'
                  >
                    Top Level Domain:
                  </Box>

                  <Box
                    className='value'
                    component='span'
                  >
                    {data?.tld}
                  </Box>
                </Box>

                <Box className='info'>
                  <Box
                    className='label'
                    component='span'
                  >
                    Currencies:
                  </Box>

                  <Box
                    className='value'
                    component='span'
                  >
                    {Object.keys(data).length > 0 && Object.values(data.currencies)?.map((item) => item.name)?.join(', ')}
                  </Box>
                </Box>

                <Box className='info'>
                  <Box
                    className='label'
                    component='span'
                  >
                    Languages:
                  </Box>

                  <Box
                    className='value'
                    component='span'
                  >
                    {Object.keys(data).length > 0 && Object.values(data.languages)?.map(item => item)?.join(', ')}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className='country_borders'>
            <Box className='info'>
              <Box className='label'>
                Border Countries:
              </Box>

              <Box className='borders'>
                {borders?.map(item => (
                  <LinkButton
                    key={item}
                    to={`/${String(item?.toLowerCase())}`}
                    text={String(item)}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </CountryContainer>
    </Box>
  )
}

export default CountryInfoContainer
