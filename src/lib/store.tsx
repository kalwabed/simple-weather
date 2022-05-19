import { createContext, useState, useContext } from 'react'
import { CurrentWeather, DailyForecasts } from './types'

interface AppCtx {
  currentWeather: CurrentWeather
  setCurrentWeather: (weather: CurrentWeather) => void
  dailyForecast: DailyForecasts
  setDailyForecast: (forecast: DailyForecasts) => void
  setQuery: (query: string) => void
  query: string
}

const AppContext = createContext<AppCtx>(undefined)

const Provider = ({ children }) => {
  const [query, setQuery] = useState('')
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>()
  const [dailyForecast, setDailyForecast] = useState<DailyForecasts>()

  return (
    <AppContext.Provider
      value={{ currentWeather, setCurrentWeather, dailyForecast, setDailyForecast, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export default { Provider, Consumer: AppContext.Consumer }
