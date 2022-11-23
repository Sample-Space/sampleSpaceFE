import "./InfoBox.css";

const InfoBox = ({ currentSample, tempo }) => {
  let sampleName;
  let description;
  let link;
  if (currentSample !== null) {
    sampleName = currentSample.name;
    description = currentSample.description;
    link = currentSample.info_url;
  }
  return (
    <section className="info-box sd">
      <div className="sample-name">
        <h2>{sampleName ? sampleName : "Play a Sample to learn more!"}</h2>
      </div>
      <hr></hr>
      <div className="description styled-scrollbars">
        <p className="description-text">{description ? description : ""}</p>
      </div>
      <hr></hr>
      <div className="button-tempo-box">
        <p>Tempo: {tempo}</p>
        <a href={link} target="_blank">
          <button className="more-info-button" disabled={!link}>
            Tell me more!
          </button>
        </a>
      </div>
    </section>
  );
};

export default InfoBox;
