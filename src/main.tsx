import { ChakraProvider, ToastProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import Context from './lib/store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Context.Provider>
        <ToastProvider />
        <App />
      </Context.Provider>
    </ChakraProvider>
  </React.StrictMode>
)
