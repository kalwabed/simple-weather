import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { WiWindy, WiCloud } from 'react-icons/wi'

import { getWeatherIcon } from '../lib/api'
import { timezoneShift, windDirection } from '../lib/fn'
import { CurrentWeather } from '../lib/types'

const Hero = ({ weather }: { weather: CurrentWeather }) => {
  return (
    <Flex
      justify="space-between"
      bgGradient="linear(to-t, #1d685a, #1ddfb6)"
      color="white"
      p={8}
      w="full"
      m="12px auto"
      rounded="md"
      shadow="md"
      border="1px solid"
      borderColor="green.300"
    >
      <Box>
        <Text as="b" fontSize="lg">
          {weather?.name ?? '-'}
        </Text>
        <Text>
          pada {new Intl.DateTimeFormat('id', { timeStyle: 'short' }).format(weather.dt * 1000)}{' '}
          {timezoneShift(weather?.timezone)}
        </Text>
        <Heading as="h1" fontSize="8xl">
          {Math.floor(weather?.main.temp)}&deg;
        </Heading>
        <Text as="b" fontSize="xl">
          {weather?.weather[0].main.toLocaleUpperCase()}
        </Text>
      </Box>

      <Flex flexDir="column" justify="center" alignItems="end">
        <img
          src={getWeatherIcon(weather?.weather[0].icon)}
          width={105}
          height={100}
          alt="Weather icon"
          decoding="async"
          loading="lazy"
        />
        <Text as="b" fontSize="2xl">
          {Math.floor(weather?.main.temp_min)} / {Math.floor(weather?.main.temp_max)}&deg;
        </Text>
        <Flex alignItems="center" textTransform="capitalize" gap="4px">
          <Text as="span">
            <WiWindy style={{ fontSize: '30px' }} />
          </Text>
          {windDirection(weather?.wind.deg)} {Math.floor(weather?.wind.speed)} m/s
        </Flex>
        <Flex alignItems="center" textTransform="capitalize" gap="4px">
          <Text as="span">
            <WiCloud style={{ fontSize: '30px' }} />
          </Text>
          {weather?.clouds.all}%
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Hero
