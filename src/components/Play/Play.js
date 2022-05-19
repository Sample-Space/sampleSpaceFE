import { useState, useEffect } from 'react'
import './Play.css'
import logo from '../../assets/images/sample-space-logo.svg'
import { fetchKitNames, fetchKit } from '../../APICalls'
import DrumPad from '../DrumPad/DrumPad'
import InfoBox from '../InfoBox/InfoBox'
import { Link } from 'react-router-dom'

const Play = () => {
  const [kitNames, setKitNames] = useState([])
  const [kit, setKit] = useState({})
  const [currentSample, setCurrentSample] = useState(null)

  useEffect(() => {
    // getKitNames()
    getKit('Starshipp')
    console.log(kit)
  }, [])

  useEffect(() => {
    console.log(kit.kit)
  }, [kit])

  const getKitNames = () => {
    fetchKitNames().then((data) => {
      setKitNames(data)
    })
  }

  const getKit = (kitName) => {
    fetchKit(kitName).then((kitData) => {
      setKit(kitData)
    })
  }

  return (
    <div className='main-view'>
      <header>
        <Link to='/'>
          <img src={logo} alt='Sample Space logo' />
        </Link>
      </header>

      {kit && (
        <main className='main-container'>
          <DrumPad kit={kit.kit} setCurrentSample={setCurrentSample} />
          <InfoBox currentSample={currentSample} />
        </main>
      )}
    </div>
  )
}

export default Play
