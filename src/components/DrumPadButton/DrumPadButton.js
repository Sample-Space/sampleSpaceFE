import './DrumPadButton.css'

const DrumPadButton = ({ setNotes, note, id, imgSrc, onClick }) => {
  return (
    <button
      className='drum-pad'
      id={id}
      onMouseDown={() => setNotes([{ name: note, duration: 4 }])}
      onMouseUp={() => setNotes(null)}
      onClick={onClick}
    >
      <img className='pad-image' src={imgSrc} />
    </button>
  )
}

export default DrumPadButton
