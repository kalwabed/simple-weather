import { Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import DailyForecast from './components/DailyForecast'

import Hero from './components/Hero'
import Layout from './components/Layout'
import { getCurrentWeather, getDailyForecast } from './lib/api'
import { useAppContext } from './lib/store'
import { CurrentWeather, DailyForecasts } from './lib/types'

function App() {
  const [weather, setWeather] = useState<CurrentWeather>()
  const [dailyForecast, setDailyForecast] = useState<DailyForecasts>()
  const { setCurrentWeather } = useAppContext()

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      async position => {
        const currentWeather = await getCurrentWeather(position.coords.latitude, position.coords.longitude)
        const daily = await getDailyForecast(position.coords.latitude, position.coords.longitude)
        console.log(daily)
        setCurrentWeather(currentWeather)
        setDailyForecast(daily)
        setWeather(currentWeather)
      },
      error => {
        console.error(error)
      }
    )
  }, [])

  return (
    <Layout>
      <Hero weather={weather} />
      <Grid
        gridTemplateRows="repeat(auto,1fr)"
        w="full"
        m="20px auto"
        bgColor="gray.200"
        rounded="md"
        border="1px solid"
        borderColor="gray.400"
        shadow="md"
      >
        {dailyForecast?.list.map(weather => (
          <DailyForecast key={weather.dt} weather={weather} />
        ))}
      </Grid>
    </Layout>
  )
}

export default App
