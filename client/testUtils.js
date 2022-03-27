import { configure } from '@testing-library/react'

export * from '@testing-library/react'

configure({
  testIdAttribute: 'data-test'
})