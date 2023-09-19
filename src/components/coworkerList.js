import React, { useContext } from 'react'
import InfoContext from '../store/info-context'

function CoworkerList() {
  const { coworkers } = useContext(InfoContext)

  const coworkersArr = coworkers.team

  if (!Array.isArray(coworkersArr)) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>List of Names</h1>
      <ul>
        {coworkersArr.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CoworkerList
