import './InfoBox.css'

const InfoBox = ({ currentSample }) => {
  // let sampleName
  // let description
  let link
  // if (currentSample !== null) {
  //   sampleName = currentSample.sampleName
  //   description = currentSample.description
  //   link = currentSample.link
  // }
  return (
    <section className='info-box'>
      {/* <h2>{sampleName ? sampleName : 'Sample Name'}</h2> */}
      {/* <p>{description ? description : 'Description'}</p> */}
      <button disabled={!link}>Tell me more!</button>
      <p>Tempo: 120</p>
    </section>
  )
}

export default InfoBox
