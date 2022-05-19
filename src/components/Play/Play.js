import { useState } from 'react'
import './Play.css'
import logo from '../../assets/images/sample-space-logo.svg'
import DrumPad from '../DrumPad/DrumPad'
import InfoBox from '../InfoBox/InfoBox'

const Play = () => {
  const [currentSample, setCurrentSample] = useState(null)
  return (
    <div className='main-view'>
      <header>
        <img src={logo} alt='Sample Space logo' />
      </header>
      <main className='main-container'>
        <DrumPad />
        <InfoBox currentSample={currentSample} />
      </main>
    </div>
  )
}

export default Play
