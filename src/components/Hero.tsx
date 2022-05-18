import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import { CurrentWeather } from '../lib/api'

const Hero = ({ weather }: { weather: CurrentWeather }) => {
  if (weather === undefined) return
  console.log(weather)

  const timezoneShift = () => {
    const shift = weather.timezone / 3600
    switch (shift) {
      case 7:
        return 'WIB'
      case 8:
        return 'WITA'
      case 9:
        return 'WIT'
      default:
        return 'WIB'
    }
  }

  return (
    <Flex
      justify="space-between"
      bgGradient="linear(to-t, #1d685a, #1ddfb6)"
      color="white"
      p={8}
      w="full"
      maxW="container.lg"
      m="12px auto"
      rounded="md"
      shadow="md"
    >
      <Box>
        <Text as="b" fontSize="lg">
          {weather.name}
        </Text>
        <Text>
          pada {new Date(weather.dt).getHours()}:{new Date(weather.dt).getMinutes()} {timezoneShift()}
        </Text>
        <Heading as="h1" fontSize="6xl">
          {Math.floor(weather.main.temp)}&deg;
        </Heading>
        <Text as="b" fontSize="xl">
          {weather.weather[0].description.toLocaleUpperCase()}
        </Text>
      </Box>

      <Flex flexDir="column" justify="center">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          width={105}
          height={100}
          alt="Weather icon"
          decoding="async"
          loading="lazy"
        />
        <Text as="b" fontSize="2xl">
          {Math.floor(weather.main.temp_min)} / {Math.floor(weather.main.temp_max)}&deg;
        </Text>
      </Flex>
    </Flex>
  )
}

export default Hero
