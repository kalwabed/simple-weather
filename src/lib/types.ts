export interface CurrentWeather {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  message: number
  country: string
  sunrise: number
  sunset: number
}
export interface DailyForecasts {
  cod: string
  message: number
  cnt: number
  list: List[]
  city: City
}

export interface List {
  dt: number
  main: DailyMain
  weather: Weather[]
  clouds: Clouds
  wind: DailyWind
  visibility: number
  pop: number
  sys: DailySys
  dt_txt: string
}

export interface DailyMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface DailyWind {
  speed: number
  deg: number
  gust: number
}

export interface DailySys {
  pod: string
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}
