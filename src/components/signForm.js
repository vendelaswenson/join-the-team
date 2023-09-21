import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const SignForm = ({ onFormSubmit }) => {
  const methods = useForm()
  const { register, handleSubmit } = useForm()

  const handleLocalSubmit = (data) => {
    const { firstName } = data
    onFormSubmit(firstName)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleLocalSubmit)}>
        <h2 className="navy f3 mt0 mb5">Register</h2>
        <h3 className="navy f4">Team player - Be positive - Beat yesterday</h3>
        <p className="measure black-60 lh-copy f6">
          Together we re-define the experience of online gaming through
          gamification and novel technical solutions.
        </p>
        <div className="input--container">
          <input {...register('firstName')} placeholder="Name" />
          <input {...register('email')} placeholder="Email" />
        </div>
        <div className="mv3">
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">
            I agree to the terms{' '}
            <span className="white f7">
              and I'll bring nice fika every friday ;)
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="form--button ph4 pv2 bg-blue white br2 bn mt3 grow pointer"
          data-ga="submit"
        >
          I'm in, sign me up!
        </button>
      </form>
    </FormProvider>
  )
}

export default SignForm
