import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/styles.css'

const SignForm = () => {
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState('')

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input {...register('firstName')} placeholder="First name" />
      <select {...register('category', { required: true })}>
        <option value="">Select...</option>
        <option value="A">Male</option>
        <option value="B">Female</option>
      </select>
      <textarea {...register('aboutYou')} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>
  )
}

export default SignForm
