import React, { useContext } from 'react'
import InfoContext from '../store/info-context'

function CoworkerList() {
  const { coworkers } = useContext(InfoContext)

  if (!Array.isArray(coworkers)) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h3>List of Names</h3>
      <ul>
        {coworkers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CoworkerList
