import React, { useState } from 'react'
import SignForm from './signForm' // Assuming SignForm is in a separate file
import CoworkerList from './coworkerList' // Assuming CoworkerList is in a separate file
import '../styles/styles.css'

const SignMeUp = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = () => {
    // Perform any form submission logic here
    // For now, just set the formSubmitted state to true
    setFormSubmitted(true)
  }

  return (
    <div className="flex vh-100 items-center">
      <div className="bg-cogs white pv4 ph5 h-100">
        <h1 className="f1 flex flex-column">
          <span>Join</span> <span>the</span> <span>team</span>
        </h1>
        {formSubmitted ? (
          <p>Thank you for signing up! Your information has been received.</p>
        ) : (
          <CoworkerList />
        )}
      </div>
      {!formSubmitted && <SignForm onFormSubmit={handleFormSubmit} />}
    </div>
  )
}

export default SignMeUp
