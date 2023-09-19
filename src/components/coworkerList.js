// CoworkerList.js
import React from 'react'

function CoworkerList({ coworkers }) {
  return (
    <div>
      <h1>List of Names</h1>
      <ul>
        {coworkers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CoworkerList
