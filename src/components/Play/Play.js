import { useState, useEffect } from 'react'
import './Play.css'
import logo from '../../assets/images/sample-space-logo.svg'
import DrumPad from '../DrumPad/DrumPad'
import InfoBox from '../InfoBox/InfoBox'
import { Link } from 'react-router-dom'

const Play = () => {
  const [currentSample, setCurrentSample] = useState(null)
  const [kit, setKit] = useState(null)

  useEffect(() => {
    fetch('https://eab5b235-d42c-43c1-a6e3-290513e953fb.mock.pstmn.io/kits/Magnetosphere')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setKit(data.kit)
      })
  }, [])

  return (
    <div className='main-view'>
      <header>
        <Link to='/'>
          <img src={logo} alt='Sample Space logo' />
        </Link>
      </header>
      {kit && (
        <main className='main-container'>
          <DrumPad setCurrentSample={setCurrentSample} kit={kit} />
          <InfoBox currentSample={currentSample} />
        </main>
      )}
    </div>
  )
}

export default Play
