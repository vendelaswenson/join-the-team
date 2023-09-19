import React, { useState } from 'react'
import SignForm from './signForm'
import CoworkerList from './coworkerList'

const SignMeUp = () => {
  const [enteredName, setEnteredName] = useState('')
  const [showForm, setShowForm] = useState(true)
  const [coworkers, setCoworkers] = useState([])

  const handleFormSubmit = (name) => {
    // Update the list of coworkers with the entered name
    setCoworkers([...coworkers, name])

    // Clear the form input
    setEnteredName('')

    // Hide the form
    setShowForm(false)
  }

  return (
    <div className="flex vh-100 items-center">
      <div className="bg-cogs white pv4 ph5 h-100">
        <h1 className="f1 flex flex-column">
          <span>Join</span> <span>the</span> <span>team</span>
        </h1>
        {showForm ? (
          <>
            <CoworkerList coworkers={coworkers} />
            <SignForm
              enteredName={enteredName}
              onNameChange={(name) => setEnteredName(name)}
              onFormSubmit={() => handleFormSubmit(enteredName)}
            />
          </>
        ) : (
          <div>
            <p>Thank you for joining!</p>
            <h2>Entered Names:</h2>
            <ul>
              {coworkers.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignMeUp
