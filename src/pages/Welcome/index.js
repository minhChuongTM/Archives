import { useEffect, useState } from 'react'
import './styles.css'

const Welcome = () => {
  const [locationName, setLocationName] = useState('ho chi minh')
  const [weatherData, setWeatherData] = useState({})

  const onChange = e => {
    const value = e.target.value
    setLocationName(value)
  }

  return (
    <section className='section'>
      <select className='form-select' value={locationName} onChange={onChange}>
        <option value='ho chi minh'>Ho Chi Minh</option>
        <option value='ha noi'>Ha Noi</option>
        <option value='da nang'>Da Nang</option>
      </select>
    </section>
  )
}

export default Welcome
