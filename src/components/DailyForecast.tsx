import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { WiCloud, WiWindy } from 'react-icons/wi'

import { getWeatherIcon } from '../lib/api'
import { windDirection } from '../lib/fn'
import { List } from '../lib/types'

const DailyForecast = ({ weather }: { weather: List }) => {
  if (!weather) return null

  return (
    <Flex
      justify="space-between"
      flexDir={['column', 'row']}
      alignItems="center"
      border="1px solid"
      borderColor="gray.400"
      p={4}
    >
      <Flex gap={16} alignItems="center" flexDir={['column', 'row']}>
        <Text>{new Intl.DateTimeFormat('id', { day: 'numeric', month: 'short' }).format(weather.dt * 1000)}</Text>
        <Text>{new Intl.DateTimeFormat('id', { timeStyle: 'short' }).format(weather.dt * 1000)}</Text>
        <Flex gap={2} alignItems="center">
          <Text as="b" fontSize="xl">
            {Math.floor(weather.main.feels_like)}&deg;
          </Text>
          /<Text>{Math.floor(weather.main.temp_max)}&deg;</Text>
        </Flex>
        <Flex alignItems="center">
          <img
            src={getWeatherIcon(weather.weather[0].icon)}
            alt="Weather icon"
            decoding="async"
            loading="lazy"
            width={80}
            height={100}
          />
          <Text>{weather.weather[0].main}</Text>
        </Flex>
      </Flex>

      <Flex alignItems="center" gap={4}>
        <Flex alignItems="center" textTransform="capitalize" gap="4px">
          <Text as="span">
            <WiWindy style={{ fontSize: '30px', color: 'blue' }} />
          </Text>
          {windDirection(weather?.wind.deg)} {Math.floor(weather?.wind.speed)} m/s
        </Flex>
        <Flex alignItems="center" textTransform="capitalize" gap="4px">
          <Text as="span">
            <WiCloud style={{ fontSize: '30px', color: 'blue' }} />
          </Text>
          {weather.clouds.all}%
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DailyForecast
