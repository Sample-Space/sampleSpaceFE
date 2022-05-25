import "./InfoBox.css";

const InfoBox = ({ currentSample }) => {
  let sampleName;
  let description;
  let link;
  if (currentSample !== null) {
    sampleName = currentSample.name;
    description = currentSample.description;
    link = currentSample.info_url;
  }
  return (
    <section className="info-box">
      <div className="sample-name">
        <h2>{sampleName ? sampleName : "Play a Sample to learn more!"}</h2>
      </div>
      <div className="description">
        <p>{description ? description : ""}</p>
      </div>
      <div className="button-tempo-box">
        <p>Tempo: 120</p>
        <a href={link}>
          <button className="more-info-button" disabled={!link}>
            Tell me more!
          </button>
        </a>
      </div>
    </section>
  );
};

export default InfoBox;
