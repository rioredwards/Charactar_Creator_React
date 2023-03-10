import './Preview.css';

export default function Preview({ head, torso, legs, catchphrases }) {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div className="outer_char_container">
        <div className="inner_char_container">
          <img className="head" src={`char_images/head/${head}.png`} />
          <img className="torso" src={`char_images/torso/${torso}.png`} />
          <img className="body" src={`char_images/body/male.png`} />
          <img className="legs" src={`char_images/legs/${legs}.png`} />
        </div>
      </div>
      <div className="catchPhrases-container">
        {catchphrases.map((catchphrase, index) => (
          <p key={index}>{catchphrase}</p>
        ))}
      </div>
    </div>
  );
}
