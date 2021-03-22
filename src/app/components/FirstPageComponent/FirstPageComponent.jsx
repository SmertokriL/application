import React from 'react'
import './FirstPageComponent.css'
import ContestResultsForm from './ContestResultsForm'
import CompetitionRegistrationBlock from '../CompetitionRegistrationBlock/CompetitionRegistrationBlock'

function FirstPageComponent() {
  return (
    <div className="app-wrapper">
      <ContestResultsForm />
      <hr />
      <CompetitionRegistrationBlock />
    </div>
  )
}

export default FirstPageComponent
