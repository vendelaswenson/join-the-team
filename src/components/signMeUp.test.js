import SignMeUp from './signForm'
import { render, cleanup } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

afterEach(() => {
  cleanup()
})

describe('Component', () => {
  it('renders without crashing', async () => {
    const utils = render(<SignMeUp />, { wrapper: MemoryRouter })
    expect(utils).toMatchSnapshot()
    expect(utils).toBeTruthy()
  })
})
