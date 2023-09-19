import React from 'react'
import { useForm } from 'react-hook-form'

const SignForm = ({ onFormSubmit }) => {
  const { register, handleSubmit } = useForm()

  const handleLocalSubmit = (data) => {
    onFormSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(handleLocalSubmit)}>
      <input {...register('firstName')} placeholder="First name" />
      <select {...register('category', { required: true })}>
        <option value="">Select...</option>
        <option value="A">Male</option>
        <option value="B">Female</option>
      </select>
      <textarea {...register('aboutYou')} placeholder="About you" />
      <input type="submit" />
    </form>
  )
}

export default SignForm
