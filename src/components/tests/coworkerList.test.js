import React from 'react'
import { render } from '@testing-library/react'
import CoworkerList from '../coworkerList'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    coworkers: ['John', 'Jane', 'Doe'],
  }),
}))

describe('CoworkerList', () => {
  it('renders the list of coworkers', () => {
    const { getByText } = render(<CoworkerList />)

    expect(getByText('List of Names')).toBeTruthy()
    expect(getByText('John')).toBeTruthy()
    expect(getByText('Jane')).toBeTruthy()
    expect(getByText('Doe')).toBeTruthy()
  })
})
