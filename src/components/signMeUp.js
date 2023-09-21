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
      <div className="site--container">
        <div className="line--container--span bg-cogs">
          <div className="line--container--tags">
            <span>Join</span> <span>the</span> <span>team</span>
          </div>
          <CoworkerList coworkers={coworkers} />
        </div>
        <div className="line--container">
          <h2 className="line--heading">Register</h2>
          <div className="white pv4 ph5 h-100">
            {confirmation ? (
              <></>
            ) : (
              <>
                <p>Thank you for joining the team!</p>
              </>
            )}
            <SignForm onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignMeUp
