import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import SignForm from '../SignForm'

const mockOnFormSubmit = jest.fn()

const renderComponent = () => {
  return render(<SignForm onFormSubmit={mockOnFormSubmit} />)
}

it('renders without crashing', async () => {
  const utils = render(<SignForm />)
  expect(utils).toMatchSnapshot()
  expect(utils).toBeTruthy()
})

describe('SignForm', () => {
  it('renders the form fields and submit button', () => {
    const { getByPlaceholderText, getByText } = renderComponent()

    expect(getByPlaceholderText('Name')).toBeTruthy()
    expect(getByPlaceholderText('Email')).toBeTruthy()
    expect(getByText("I'm in, sign me up!")).toBeTruthy()
  })

  it('submits the form with the provided data', async () => {
    const { getByPlaceholderText, getByText } = renderComponent()

    fireEvent.change(getByPlaceholderText('Name'), {
      target: { value: 'John Doe' },
    })

    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'john@example.com' },
    })

    fireEvent.click(getByText("I'm in, sign me up!"))

    await waitFor(() => {
      expect(mockOnFormSubmit).toHaveBeenCalledWith('John Doe')
    })
  })
})
