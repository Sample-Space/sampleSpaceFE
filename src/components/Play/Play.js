import { useState, useEffect } from 'react'
import './Play.css'
import logo from '../../assets/images/sample-space-logo.svg'
import DrumPad from '../DrumPad/DrumPad'
import InfoBox from '../InfoBox/InfoBox'
import { Link } from 'react-router-dom'

const Play = () => {
  const [currentSample, setCurrentSample] = useState(null)

  return (
    <div className='main-view'>
      <header>
        <Link to='/'>
          <img src={logo} alt='Sample Space logo' />
        </Link>
      </header>
      <main className='main-container'>
        <DrumPad setCurrentSample={setCurrentSample} />
        <InfoBox currentSample={currentSample} />
      </main>
    </div>
  )
}

export default Play
