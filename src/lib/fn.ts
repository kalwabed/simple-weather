// convert wind direction from degrees to compass direction
export const windDirection = (windDegrees: number) => {
  const directions = ['utara', 'timur laut', 'timur', 'tenggara', 'selatan', 'barat daya', 'barat', 'barat laut']
  const index = Math.round((windDegrees + 11.25) / 22.5)
  return directions[index % 8]
}

export const timezoneShift = (timezone: number) => {
  const shift = timezone / 3600
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
