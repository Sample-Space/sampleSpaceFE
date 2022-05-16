import { Song, Track, Instrument, Effect } from 'reactronica'
import './Play.css'
import logo from '../../assets/images/sample-space-logo.svg'
import DrumPad from '../DrumPad/DrumPad'
import InfoBox from '../InfoBox/InfoBox'

const Play = () => {
  return (
    <>
      <header>
        <img src={logo} alt='Sample Space logo' />
      </header>
      <main className='main-container'>
        <div className='pad-container'>
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
          <DrumPad />
        </div>
        <InfoBox />
      </main>
    </>
  )
}

export default Play
