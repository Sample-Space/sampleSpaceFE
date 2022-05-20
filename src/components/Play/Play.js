import { useState, useEffect, useRef } from 'react'
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
  const kickRef = useRef(null)
  const snareRef = useRef(null)
  const hh_closedRef = useRef(null)
  const hh_openRef = useRef(null)
  const one_shot_1Ref = useRef(null)
  const one_shot_2Ref = useRef(null)
  const melodyRef = useRef(null)
  const grooveRef = useRef(null)

  const allRefs = [
    kickRef,
    snareRef,
    hh_closedRef,
    hh_openRef,
    one_shot_1Ref,
    one_shot_2Ref,
    melodyRef,
    grooveRef
  ]

  const handleKeyboard = (e) => {
    switch (e.code) {
      case 'KeyA':
        kickRef.current.click()
        break
      case 'KeyS':
        snareRef.current.click()
        break
      case 'KeyD':
        hh_closedRef.current.click()
        break
      case 'KeyF':
        hh_openRef.current.click()
        break
      case 'KeyQ':
        one_shot_1Ref.current.click()
        break
      case 'KeyW':
        one_shot_2Ref.current.click()
        break
      case 'KeyE':
        melodyRef.current.click()
        break
      case 'KeyR':
        grooveRef.current.click()
    }
  }

  useEffect(() => {
    // getKitNames()
    getKit('Starshipp')
    console.log(kit)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)
    return () => {
      document.removeEventListener('keyup', handleKeyboard)
    }
  }, [handleKeyboard])

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
          <DrumPad kit={kit.kit} setCurrentSample={setCurrentSample} kickRef={kickRef} />
          <InfoBox currentSample={currentSample} />
        </main>
      )}
    </div>
  )
}

export default Play
