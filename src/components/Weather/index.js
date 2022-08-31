import { useMemo } from 'react'
import './styles.css'

const Weather = () => {
  // tim trong du lieu tra ve icon 
  // const src = useMemo(() => {
  //   return `http://openweathermap.org/img/wn/${}@2x.png`
  // }, [data])

  return (
    <div className='weather'>
      <div className='general'>
        <div className='location'></div>
        <div></div>
        <img alt='' />
        <div className='temperature'><sup>o</sup></div>
      </div>

      <div className='row'>
        <div className='col-xl-6'>
          <div className='detail'>
            <h6 className='label'>temperature min</h6>
            <div className='value'><sup>o</sup></div>
          </div>
          <div className='detail'>
            <h6 className='label'>temperature max</h6>
            <div className='value'><sup>o</sup></div>
          </div>
          <div className='detail'>
            <h6 className='label'>Visibility</h6>
            <div className='value'></div>
          </div>
        </div>
        <div className='col-xl-6'>
          <div className='detail'>
            <h6 className='label'>pressure</h6>
            <div className='value'></div>
          </div>
          <div className='detail'>
            <h6 className='label'>humidity</h6>
            <div className='value'></div>
          </div>
          <div className='detail'>
            <h6 className='label'>Wind speed</h6>
            <div className='value'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
