import { CurrentWeather, DailyForecasts } from './types'

export async function getCurrentWeatherByCoord(lat: number, lon: number): Promise<CurrentWeather> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=id&units=metric&appid=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }`
  )
  return response.json()
}

export async function getDailyForecastByCoord(lat: number, lon: number): Promise<DailyForecasts> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=20&lang=id&units=metric&appid=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }`
  )
  return response.json()
}

export async function getCurrentWeatherByQuery(query: string): Promise<CurrentWeather> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&lang=id&units=metric&appid=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }`
  )
  return response.json()
}

export async function getDailyForecastByQuery(query: string): Promise<DailyForecasts> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${query}&cnt=20&lang=id&units=metric&appid=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }`
  )
  return response.json()
}

export function getWeatherIcon(iconCode: string): string {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}
