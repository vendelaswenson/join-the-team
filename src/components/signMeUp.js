import React, { useContext, useState } from 'react'
import SignForm from './signForm'
import CoworkerList from './coworkerList'
import InfoContext from '../store/info-context'

const SignMeUp = () => {
  const [showForm, setShowForm] = useState(true)
  const { coworkers, addCoworker } = useContext(InfoContext)

  const handleFormSubmit = (enteredName) => {
    // Add the entered name to the coworkers list
    addCoworker(enteredName)

    // Hide the form
    setShowForm(false)
  }

  return (
    <div className="flex vh-100 items-center">
      <div className="bg-cogs white pv4 ph5 h-100">
        {showForm ? (
          <>
            <span>Join</span> <span>the</span> <span>team</span>
            <CoworkerList coworkers={coworkers} />
            <SignForm onFormSubmit={handleFormSubmit} />
          </>
        ) : (
          <div>
            <p>Thank you for joining the team!</p>
            <h2>The updated team:</h2>
            <CoworkerList coworkers={coworkers} />
          </div>
        )}
      </div>
    </div>
  )
}

export default SignMeUp
