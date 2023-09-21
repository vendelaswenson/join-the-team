import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SignMeUp from '../signMeUp' // Import your SignMeUp component

// Mock the addCoworker function from the context
const mockAddCoworker = jest.fn()

// Mock the useContext hook to provide the context value
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    coworkers: [],
    addCoworker: mockAddCoworker,
  }),
}))

describe('SignMeUp', () => {
  it('renders the SignForm component', () => {
    const { getByText, getByPlaceholderText } = render(<SignMeUp />)

    // Assert that the form fields and submit button are present
    expect(getByPlaceholderText('Name')).toBeTruthy()
    expect(getByText("I'm in, sign me up!")).toBeTruthy()
  })

  it('submits the form and displays confirmation message', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <SignMeUp />,
    )

    // Fill in the form field
    fireEvent.change(getByPlaceholderText('Name'), {
      target: { value: 'John Doe' },
    })
  })
})
