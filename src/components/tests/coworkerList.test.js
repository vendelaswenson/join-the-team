import React from 'react'
import { render } from '@testing-library/react'
import CoworkerList from '../coworkerList'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    coworkers: ['John', 'Jane', 'Doe'],
  }),
}))

it('renders without crashing', async () => {
  const utils = render(<CoworkerList />)
  expect(utils).toMatchSnapshot()
  expect(utils).toBeTruthy()
})

describe('CoworkerList', () => {
  it('renders the list of coworkers', () => {
    const { getByText } = render(<CoworkerList />)
    expect(getByText('John')).toBeTruthy()
    expect(getByText('Jane')).toBeTruthy()
    expect(getByText('Doe')).toBeTruthy()
  })
})
