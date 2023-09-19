import React, { useContext, useState } from 'react'
import SignForm from './signForm'
import CoworkerList from './coworkerList'
import InfoContext from '../store/info-context'
import '../styles/styles.css'

const SignMeUp = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [enteredNames, setEnteredNames] = useState([])
  const { postCoworker } = useContext(InfoContext)

  const handleFormSubmit = async (formData) => {
    console.log(formData)
    try {
      const response = await postCoworker({
        team: [formData.firstName],
      })

      console.log('Data successfully sent:', response)
      setFormSubmitted(true)
      setEnteredNames([...enteredNames, formData.firstName])
    } catch (error) {
      console.error('Error sending data:', error)
    }
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
