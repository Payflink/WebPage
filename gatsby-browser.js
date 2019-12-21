import React from 'react'

import { CurrencyProvider } from './src/contexts/CurrencyContext'

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <CurrencyProvider>{element}</CurrencyProvider>
)
