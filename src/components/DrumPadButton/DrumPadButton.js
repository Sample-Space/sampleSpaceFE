import './DrumPadButton.css'

const DrumPadButton = ({ setNotes, notes, note, id, imgSrc }) => {

  const play = async () => {
    await (notes === null ? setNotes([{name: note, duration: 3}]) : '')
    reset();
  }

  const reset = async () => {
    await setNotes(null)
  }

  return (
    <>
      <button
        className='drum-pad'
        id={id}
        onClick={() => play()}
      >
        <img className='pad-image' src={imgSrc} />
      </button>
    </>
  )
}

export default DrumPadButton
