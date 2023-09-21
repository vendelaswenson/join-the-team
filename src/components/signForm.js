import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const SignForm = ({ onFormSubmit }) => {
  const methods = useForm()
  const { register, handleSubmit, reset } = useForm()

  const handleLocalSubmit = (data) => {
    const { firstName } = data
    onFormSubmit(firstName)
    clearInputFields()
  }
  const clearInputFields = () => {
    reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleLocalSubmit)}>
        <h3 className="navy f4">Team player - Be positive - Beat yesterday</h3>
        <p className="measure black-60 lh-copy f6">
          Together we re-define the experience of online gaming through
          gamification and novel technical solutions.
        </p>
        <div className="input--container">
          <input
            className="input--field"
            {...register('firstName', { required: true })}
            placeholder="Name"
          />
          <input
            className="input--field"
            {...register('email', { required: true })}
            placeholder="Email"
          />
        </div>
        <div className="mv3">
          <input type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms">
            I agree to the terms
            <span className="invisible--text white f7">
              and I'll bring nice fika every friday ;)
            </span>{' '}
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
