import React, { useState, useEffect, createContext } from 'react'

const InfoContext = createContext({
  coworkers: [],
  addCoworker: () => {},
})

export const InfoContextProvider = ({ children }) => {
  const [coworkers, setCoworkers] = useState([])

  useEffect(() => {
    const fetchCoworkers = async () => {
      try {
        const response = await fetch(
          'https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6',
        )
        if (!response.ok) {
          throw new Error('Error fetching coworkers data')
        }
        const data = await response.json()
        setCoworkers(data.team || [])
      } catch (error) {
        console.error('Error fetching coworkers:', error)
      }
    }

    fetchCoworkers()
  }, [])

  const addCoworker = (name) => {
    setCoworkers([...coworkers, name])
  }

  return (
    <InfoContext.Provider
      value={{
        coworkers,
        addCoworker,
      }}
    >
      {children}
    </InfoContext.Provider>
  )
}

export default InfoContext
