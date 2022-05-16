import React from 'react'
import { Song, Track, Instrument } from 'reactronica';
import kick from "../../assets/samples/kick.mp3"
import "./DrumPad.css"

const DrumPad = ({ padId }) => {

  return (
    <>
    <button className="drum-pad" id="1"
       >
      <img className="pad-image" src="https://images.theconversation.com/files/394/original/See_Explanation._Clicking_on_the_picture_will_download_the_highest_resolution_version_available.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" />
    </button>

    </>
  )
}

export default DrumPad;
