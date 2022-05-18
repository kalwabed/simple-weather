import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex minH="full" flex="1 1 auto" flexDir="column" width="full" p={[4, 0]}>
      {children}
    </Flex>
  )
}

export default Layout
