import React from 'react'
import '../../../App.css'
import ContestResultsForm from './ContestResultsForm'
import CompetitionRegistrationBlock from './CompetitionRegistrationBlock'

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
