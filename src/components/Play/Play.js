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
        <DrumPad />
        <InfoBox />
      </main>
    </>
  )
}

export default Play
