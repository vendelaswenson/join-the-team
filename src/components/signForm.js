import React from 'react'
import '../styles/styles.css'

const SignForm = () => {
  return (
    <form className="pl5 mw6" defaultChecked>
      <h2 className="navy f3 mt0 mb5">Register</h2>
      <h3 className="navy f4">Team player - Be positive - Beat yesterday</h3>
      <p className="measure black-60 lh-copy f6">
        Together we re-define the experience of online gaming through
        gamification and novel technical solutions.
      </p>
      <input
        type="text"
        placeholder="Name"
        className="db h2 w-100 ba pl2 br2 b--black-30 mv2"
        data-ga="name"
      />
      <input
        type="text"
        placeholder="Email"
        className="db h2 w-100 ba pl2 br2 b--black-30 mv2"
        data-ga="email"
      />
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
        defaultChecked
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
