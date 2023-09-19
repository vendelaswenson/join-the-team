import React from 'react'
import { useForm } from 'react-hook-form'

const SignForm = ({ onFormSubmit }) => {
  const { register, handleSubmit } = useForm()

  const handleLocalSubmit = (data) => {
    onFormSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(handleLocalSubmit)}>
      <h2 className="navy f3 mt0 mb5">Register</h2>
      <h3 className="navy f4">Team player - Be positive - Beat yesterday</h3>
      <p className="measure black-60 lh-copy f6">
        Together we re-define the experience of online gaming through
        gamification and novel technical solutions.
      </p>
      <input {...register('firstName')} placeholder="First name" />
      <input {...register('firstName')} placeholder="Email" />
      <div className="mv3">
        <input type="checkbox" id="terms" name="terms" defaultChecked />
        <label htmlFor="terms">
          I agree to the terms{' '}
          <span className="white f7">
            and I'll bring nice fika every friday ;)
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="ph4 pv2 bg-blue white br2 bn mt3 grow pointer"
        data-ga="submit"
      >
        I'm in, sign me up!
      </button>
    </form>
  )
}

export default SignForm
