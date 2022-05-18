import { useEffect, useState } from 'react'

import Hero from './components/Hero'
import Layout from './components/Layout'
import { CurrentWeather, getCurrentWeather } from './lib/api'

function App() {
  const [weather, setWeather] = useState<CurrentWeather>()

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      async position => {
        const json = await getCurrentWeather(position.coords.latitude, position.coords.longitude)

        setWeather(json)
      },
      error => {
        console.error(error)
      }
    )
  }, [])

  return (
    <Layout>
      <Hero weather={weather} />
    </Layout>
  )
}

export default App
