import React, { useEffect, useState } from 'react'
import './Play.css'
import logo from '../../assets/images/sample-space-logo.svg'
import { fetchKitNames, fetchKit } from '../../APICalls'
import DrumPad from '../DrumPad/DrumPad'
import InfoBox from '../InfoBox/InfoBox'

const Play = () => {
  const [kitNames, setKitNames] = useState([])
  const [kit, setKit] = useState({})

  useEffect(() => {
    getKitNames()
    getKit('Starshipp')

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
    <>
      <header>
        <img src={logo} alt='Sample Space logo' />
      </header>
      <main className='main-container'>
        {kit && <DrumPad kit={kit.kit} />}
        <InfoBox />
      </main>
    </>
  )
}

export default Play
