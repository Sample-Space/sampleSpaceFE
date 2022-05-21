import './InfoBox.css'

const InfoBox = ({ currentSample }) => {
  let sampleName
  let description
  let link
  if (currentSample !== null) {
    sampleName = currentSample.name
    description = currentSample.description
    link = currentSample.info_url
  }
  return (
    <section className='info-box'>
      <h2>{sampleName ? sampleName : 'Play a Sample to learn more!'}</h2>
      <p>{description ? description : ''}</p>
      <a href={link}>
        <button disabled={!link}>Tell me more!</button>
      </a>
      <p>Tempo: 120</p>
    </section>
  )
}

export default InfoBox
