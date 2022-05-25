import { useState, useEffect, useRef, useCallback } from 'react'
import './Play.css'
import logo from '../../assets/images/sample-space-logo.svg'
import { fetchKitNames, fetchKit } from '../../APICalls'
import PianoRoll from '../PianoRoll/PianoRoll.js'
import DrumPad from '../DrumPad/DrumPad'
import InfoBox from '../InfoBox/InfoBox'
import { Link } from 'react-router-dom'

const Play = () => {
  const [kitNames, setKitNames] = useState([])
  const [kit, setKit] = useState(null)
  const [currentSample, setCurrentSample] = useState(null)
  const [selectedKit, setSelectedKit] = useState('Andromeda%20Strain')
  const isFirstLoad = useRef(true)

  const kickRef = useRef(null)
  const snareRef = useRef(null)
  const hhClosedRef = useRef(null)
  const hhOpenRef = useRef(null)
  const oneShotOneRef = useRef(null)
  const oneShotTwoRef = useRef(null)
  const melodyRef = useRef(null)
  const grooveRef = useRef(null)

  const handleKeyboard = useCallback(
    (e) => {
      switch (e.code) {
        case 'KeyA':
          kickRef.current.click()
          break
        case 'KeyS':
          snareRef.current.click()
          break
        case 'KeyD':
          hhClosedRef.current.click()
          break
        case 'KeyF':
          hhOpenRef.current.click()
          break
          case 'KeyQ':
          melodyRef.current.click()
          break
          case 'KeyW':
          oneShotOneRef.current.click()
          break
          case 'KeyE':
          oneShotTwoRef.current.click()
          break
        case 'KeyR':
          grooveRef.current.click()
      }
    },
    [
      kickRef,
      snareRef,
      hhClosedRef,
      hhOpenRef,
      melodyRef,
      oneShotOneRef,
      oneShotTwoRef,
      grooveRef
    ]
  )

  const clearSamples = () => {
    setKit(null)
  }

  useEffect(() => {
    fetchKit('Andromeda%20Strain').then((data) => setKit(data))
    
  }, [])

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false
    } else {
      clearSamples()
      fetchKit(selectedKit).then((data) => setKit(data))
    }
  }, [selectedKit])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)
    return () => {
      document.removeEventListener('keydown', handleKeyboard)
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

  const changeKit = (selectedKit) => {
    fetchKit(selectedKit).then((data) => setKit(data.kit))
  }

  return (
    <div className='main-view'>
      <header className="play-header">
        <Link to='/'>
          <img src={logo} alt='Sample Space logo' />
        </Link>
      <label htmlFor='kit-select' className='kit-label'>
        Choose a Kit to Play!
      </label>
      <select
        className='kit-select'
        name='kit-select'
        onChange={(e) => setSelectedKit(e.target.value)}
      >
        <option value='Andromeda%20Strain'>Andromeda Strain</option>
        <option value='Magnetosphere'>Magnetosphere</option>
        <option value='Apollo%2011'>Apollo 11</option>
      </select>
      </header>
      {kit && (
        <main className='main-container'>
          <DrumPad
            kit={kit.kit}
            setCurrentSample={setCurrentSample}
            allRefs={[
              kickRef,
              snareRef,
              hhClosedRef,
              hhOpenRef,
              oneShotOneRef,
              oneShotTwoRef,
              melodyRef,
              grooveRef
            ]}
            keystrokes={['Q', 'W', 'E', 'R', 'A', 'S', 'D', 'F']}
          />
          <InfoBox currentSample={currentSample} />

          <PianoRoll kit={kit.kit} />
        </main>
      )}
    </div>
  )
}

export default Play
