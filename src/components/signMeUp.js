import React, { useContext, useState } from 'react'
import SignForm from './signForm'
import CoworkerList from './coworkerList'
import InfoContext from '../store/info-context'

const SignMeUp = () => {
  const [confirmation, setConfirmation] = useState(false)
  const { coworkers, addCoworker } = useContext(InfoContext)

  const handleFormSubmit = (enteredName) => {
    addCoworker(enteredName)
    setConfirmation(true)
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
            <SignForm onFormSubmit={handleFormSubmit} />
            {confirmation && <p>Thank you for joining the team!</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignMeUp
