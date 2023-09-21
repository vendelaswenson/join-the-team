import React, { useContext, useState } from 'react'
import SignForm from './signForm'
import CoworkerList from './coworkerList'
import InfoContext from '../store/info-context'

const SignMeUp = () => {
  const [confirmation, setConfirmation] = useState(true)
  const { coworkers, addCoworker } = useContext(InfoContext)

  const handleFormSubmit = (enteredName) => {
    // Add the entered name to the coworkers list
    addCoworker(enteredName)
    // Hide the form
    setConfirmation(false)
  }

  return (
    <div className="flex vh-100 items-center">
      <div className="bg-cogs white pv4 ph5 h-100">
        <CoworkerList coworkers={coworkers} />
        {confirmation ? (
          <>
            <span>Join</span> <span>the</span> <span>team</span>
          </>
        ) : (
          <>
            <p>Thank you for joining the team!</p>
          </>
        )}
        <SignForm onFormSubmit={handleFormSubmit} />
      </div>
    </div>
  )
}

export default SignMeUp
