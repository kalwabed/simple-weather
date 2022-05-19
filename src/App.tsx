import { Grid, Spinner } from '@chakra-ui/react'
import { useEffect } from 'react'

import DailyForecast from './components/DailyForecast'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Search from './components/Search'
import { getCurrentWeatherByCoord, getDailyForecastByCoord } from './lib/api'
import { useAppContext } from './lib/store'

function App() {
  const { currentWeather, setCurrentWeather, setDailyForecast, dailyForecast } = useAppContext()

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      async position => {
        const [lat, lon] = [position.coords.latitude, position.coords.longitude]
        const [currentWeather, daily] = await Promise.all([
          getCurrentWeatherByCoord(lat, lon),
          getDailyForecastByCoord(lat, lon)
        ])

        setDailyForecast(daily)
        setCurrentWeather(currentWeather)
      },
      error => {
        console.error(error)
      }
    )
  }, [])

  if (!currentWeather || !dailyForecast) {
    return (
      <Layout>
        <Spinner size="xl" m="8px auto" />
      </Layout>
    )
  }

  return (
    <Layout>
      <Search />
      <Hero />
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
        {dailyForecast?.list?.map(weather => (
          <DailyForecast key={weather.dt} weather={weather} />
        ))}
      </Grid>
    </Layout>
  )
}

export default App
