import { configure } from "@testing-library/react"
import '@testing-library/jest-dom';

export * from "@testing-library/react"

configure({
  testIdAttribute: "data-test"
})