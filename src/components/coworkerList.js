import React, { useEffect, useState } from 'react'

function CoworkerList() {
  const [names, setNames] = useState([])

  useEffect(() => {
    fetch('https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6')
      .then((response) => response.json())
      .then((data) => setNames(data.team))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <div>
      <h1>List of Names</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CoworkerList
