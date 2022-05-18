import { CurrentWeather, DailyForecasts } from './types'

export async function getCurrentWeather(lat: number, lon: number): Promise<CurrentWeather> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=id&units=metric&appid=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }`
  )
  return response.json()
}

export async function getDailyForecast(lat: number, lon: number): Promise<DailyForecasts> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=10&lang=id&units=metric&appid=${
      import.meta.env.VITE_APP_WEATHER_API_KEY
    }`
  )
  return response.json()
}

export function getWeatherIcon(iconCode: string): string {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}
