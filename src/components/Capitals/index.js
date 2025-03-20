import React, {useState} from 'react'
import './index.css'

const Capitals = () => {
  const countryAndCapitalsList = [
    {id: 'NEW_DELHI', capitalDisplayText: 'New Delhi', country: 'India'},
    {id: 'LONDON', capitalDisplayText: 'London', country: 'United Kingdom'},
    {id: 'PARIS', capitalDisplayText: 'Paris', country: 'France'},
    {id: 'KATHMANDU', capitalDisplayText: 'Kathmandu', country: 'Nepal'},
    {id: 'HELSINKI', capitalDisplayText: 'Helsinki', country: 'Finland'},
  ]

  const [selectedCapitalId, setSelectedCapitalId] = useState('NEW_DELHI')

  const selectedCountry = countryAndCapitalsList.find(
    item => item.id === selectedCapitalId,
  ).country

  const handleChange = event => {
    setSelectedCapitalId(event.target.value)
  }

  return (
    <div className="app-container">
      <div className="capitals-container">
        <h1 className="heading">Countries And Capitals</h1>
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedCapitalId}
            onChange={handleChange}
          >
            {countryAndCapitalsList.map(item => (
              <option key={item.id} value={item.id}>
                {item.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="description">is capital of which country ?</p>
        </div>
        <h2 className="country-name">{selectedCountry}</h2>
      </div>
    </div>
  )
}

export default Capitals
