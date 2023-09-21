import React, { useContext } from 'react'
import InfoContext from '../store/info-context'

function CoworkerList() {
  const { coworkers } = useContext(InfoContext)

  if (!Array.isArray(coworkers)) {
    return <div>Loading...</div>
  }

  return (
    <div className="coworker--list">
      <ul>
        {coworkers.map((name, index) => (
          <li className="coworker--list__item" key={index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CoworkerList
