import { useMemo } from 'react'
import './styles.css'

const Weather = ({data}) => {
  // tim trong du lieu tra ve icon 

  const src = useMemo(() => {
    return `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }, [data])

  return (
    <div className='weather'>
      <div className='general'>
        <div className='location'>{data.name}</div>
        <div>{data.weather[0].description}</div>
        <img src={src} alt='' />
        <div className='temperature'>{data.main.temp}<sup>o</sup></div>
      </div>

      <div className='row'>
        <div className='col-xl-6'>
          <div className='detail'>
            <h6 className='label'>temperature min</h6>
            <div className='value'>{data.main.temp_min}<sup>o</sup></div>
          </div>
          <div className='detail'>
            <h6 className='label'>temperature max</h6>
            <div className='value'>{data.main.temp_max}<sup>o</sup></div>
          </div>
          <div className='detail'>
            <h6 className='label'>Visibility</h6>
            <div className='value'>{data.visibility}</div>
          </div>
        </div>
        <div className='col-xl-6'>
          <div className='detail'>
            <h6 className='label'>pressure</h6>
            <div className='value'>{data.main.pressure}</div>
          </div>
          <div className='detail'>
            <h6 className='label'>humidity</h6>
            <div className='value'>{data.main.humidity}</div>
          </div>
          <div className='detail'>
            <h6 className='label'>Wind speed</h6>
            <div className='value'>{data.wind.speed}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather;
