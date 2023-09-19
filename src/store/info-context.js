import React, { useState, useEffect } from 'react'

const InfoContext = React.createContext({
  coworkers: [],
  postCoworker: () => {},
})

export const InfoContextProvider = (props) => {
  const [coworkers, setCoworkers] = useState([])

  useEffect(() => {
    const fetchCoworkers = async () => {
      const response = await fetch(
        'https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6',
      )
      const data = await response.json()
      setCoworkers(data)
    }
    fetchCoworkers()
  }, [])

  const postCoworker = (coworkerBody) => {
    fetch('http://localhost:3000/update-team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coworkerBody),
    })
  }

  return (
    <InfoContext.Provider
      value={{
        coworkers,
        postCoworker,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  )
}

export default InfoContext
