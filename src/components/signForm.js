import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const SignForm = ({ onFormSubmit }) => {
  const { register, handleSubmit } = useForm()

  // Create a local state to track whether the form has been submitted
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleLocalSubmit = (data) => {
    // Inform the parent component that the form has been submitted
    setFormSubmitted(true)

    // Pass the form data to the parent component
    onFormSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(handleLocalSubmit)}>
      {formSubmitted ? (
        <p>Thank you for signing up! Your information has been received.</p>
      ) : (
        <>
          <input {...register('firstName')} placeholder="First name" />
          <select {...register('category', { required: true })}>
            <option value="">Select...</option>
            <option value="A">Male</option>
            <option value="B">Female</option>
          </select>
          <textarea {...register('aboutYou')} placeholder="About you" />
          <input type="submit" />
        </>
      )}
    </form>
  )
}

export default SignForm
