import { useState, useEffect, useRef, useCallback } from 'react'
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
  const [selectedKit, setSelectedKit] = useState(null)

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
          oneShotOneRef.current.click()
          break
        case 'KeyW':
          oneShotTwoRef.current.click()
          break
        case 'KeyE':
          melodyRef.current.click()
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
      oneShotOneRef,
      oneShotTwoRef,
      melodyRef,
      grooveRef
    ]
  )
  useEffect(() => {
    // getKitNames()
    // getKit('Starshipp')
    fetch('https://sample-space-be.herokuapp.com/api/v1/kits/Andromeda%20Pain')
      .then((res) => res.json())
      .then((data) => setKit(data))
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)
    return () => {
      document.removeEventListener('keydown', handleKeyboard)
    }
  }, [handleKeyboard])

  // const getKitNames = () => {
  //   fetchKitNames().then((data) => {
  //     setKitNames(data)
  //   })
  // }

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

      <select
        className='kit-select'
        name='kit-select'
        onChange={(e) => setSelectedKit(e.target.value)}
      >
        <option value='andromedaStrain'>Andromeda Strain</option>
        <option value='magnetosphere'>Magnetosphere</option>
        <option value='apollo11'>Apollo11</option>
      </select>

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
        </main>
      )}
    </div>
  )
}

export default Play
