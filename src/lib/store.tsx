import { createContext, useState, useContext } from 'react'
import { CurrentWeather, DailyForecasts } from './types'

interface AppCtx {
  currentWeather: CurrentWeather
  setCurrentWeather: (weather: CurrentWeather) => void
  dailyForecast: DailyForecasts
  setDailyForecast: (forecast: DailyForecasts) => void
}

const AppContext = createContext<AppCtx>(undefined)

const Provider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>()
  const [dailyForecast, setDailyForecast] = useState<DailyForecasts>()

  return (
    <AppContext.Provider value={{ currentWeather, setCurrentWeather, dailyForecast, setDailyForecast }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export default { Provider, Consumer: AppContext.Consumer }
