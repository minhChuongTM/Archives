import { useEffect, useState } from 'react'
import { getAPI } from '../../apis/weather'
import Weather from '../../components/Weather'
import './styles.css'

const Welcome = () => {
  const [locationName, setLocationName] = useState('ho chi minh')
  const [weatherData, setWeatherData] = useState({})

  console.log(getAPI)
  const onChange = e => {
    const value = e.target.value
    setLocationName(value)
  }
  useEffect(() => {
    getAPI(locationName).then(res => {
      setWeatherData(res.data);
    }).catch(error => {
      console.log(error);
    });
  }, [locationName]);
  return (
    <section className='section'>
      <select className='form-select' value={locationName} onChange={onChange}>
        <option value='ho chi minh'>Ho Chi Minh</option>
        <option value='ha noi'>Ha Noi</option>
        <option value='da nang'>Da Nang</option>
        <option value='quang ngai'>Quang Ngai</option>
      </select>
      {weatherData.name &&(
        <Weather data={weatherData} />
      )}
    </section>
  )
}

export default Welcome
