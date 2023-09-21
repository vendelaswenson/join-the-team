import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SignMeUp from '../signMeUp'

const mockAddCoworker = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    coworkers: [],
    addCoworker: mockAddCoworker,
  }),
}))

it('renders without crashing', async () => {
  const utils = render(<SignMeUp />)
  expect(utils).toMatchSnapshot()
  expect(utils).toBeTruthy()
})

describe('SignMeUp', () => {
  it('renders the SignForm component', () => {
    const { getByText, getByPlaceholderText } = render(<SignMeUp />)

    expect(getByPlaceholderText('Name')).toBeTruthy()
    expect(getByText("I'm in, sign me up!")).toBeTruthy()
  })

  it('submits the form and displays confirmation message', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <SignMeUp />,
    )

    fireEvent.change(getByPlaceholderText('Name'), {
      target: { value: 'John Doe' },
    })
  })
})
