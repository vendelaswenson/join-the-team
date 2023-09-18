import React from 'react'
import SignForm from './signForm'
import CoworkerList from './coworkerList'
import '../styles/styles.css'

const Sign = () => {
  return (
    <div className="flex vh-100 items-center">
      <div className="bg-cogs white pv4 ph5 h-100">
        <h1 className="f1 flex flex-column">
          <span>Join</span> <span>the</span> <span>team</span>
        </h1>
        <CoworkerList />
      </div>
      <SignForm />
    </div>
  )
}

export default Sign
