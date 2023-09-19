import React, { useState } from 'react'
import SignForm from './signForm'
import CoworkerList from './coworkerList'
import axios from 'axios'
import '../styles/styles.css'

const SignMeUp = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [enteredNames, setEnteredNames] = useState([])

  const handleFormSubmit = (formData) => {
    const { firstName } = formData
    const dataWithFirstName = {
      firstName,
    }
    axios
      .post(
        'https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6',
        dataWithFirstName,
      )
      .then((response) => {
        console.log('Data successfully sent:', response.data)
        setFormSubmitted(true)
        setEnteredNames([...enteredNames, firstName])
      })
      .catch((error) => {
        console.error('Error sending data:', error)
      })
  }

  return (
    <div className="flex vh-100 items-center">
      <div className="bg-cogs white pv4 ph5 h-100">
        <h1 className="f1 flex flex-column">
          <span>Join</span> <span>the</span> <span>team</span>
        </h1>
        <CoworkerList />
        {formSubmitted ? (
          <div>
            <p>Thank you for signing up! Your information has been received.</p>
            <h2>Entered Names:</h2>
            <ul>
              {enteredNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
      {!formSubmitted && <SignForm onFormSubmit={handleFormSubmit} />}
    </div>
  )
}

export default SignMeUp
