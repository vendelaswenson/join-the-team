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

  const postCoworker = async (coworkerName) => {
    try {
      const response = await fetch('http://localhost:3010/update-team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(coworkerName),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
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
