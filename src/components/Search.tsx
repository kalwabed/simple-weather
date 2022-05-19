import { useState } from 'react'
import { Button, Flex, Input, useToast } from '@chakra-ui/react'

import { getCurrentWeatherByQuery, getDailyForecastByQuery } from '../lib/api'
import { useAppContext } from '../lib/store'

const Search = () => {
  const [query, setQuery] = useState('')
  const { setCurrentWeather, setDailyForecast } = useAppContext()
  const toast = useToast()

  const handleOnSearch = async ev => {
    ev.preventDefault()

    try {
      const [currentWeather, dailyForecast] = await Promise.all([
        getCurrentWeatherByQuery(query),
        getDailyForecastByQuery(query)
      ])

      setCurrentWeather(currentWeather)
      setDailyForecast(dailyForecast)
    } catch (error) {
      toast({ status: 'error', title: 'Error', description: error.message })
    } finally {
      setQuery('')
    }
  }

  return (
    <Flex as="form" onSubmit={handleOnSearch} mt={8} alignItems="center" gap={2}>
      <Input w="30%" value={query} onChange={e => setQuery(e.currentTarget.value)} placeholder="Search city..." />
      <Button colorScheme="green" type="submit">
        Search
      </Button>
    </Flex>
  )
}

export default Search
