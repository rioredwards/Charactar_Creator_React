import './Preview.css';

export default function Preview({ head, torso, legs, catchphrases }) {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div className="char_container">
        <img className="head" src={`char_images/head/${head}.png`} />
        <img className="torso" src={`char_images/torso/${torso}.png`} />
        <img className="legs" src={`char_images/legs/${legs}.png`} />
      </div>
      <div className="catchPhrases-container">
        {catchphrases.map((catchphrase, index) => (
          <p key={index}>{catchphrase}</p>
        ))}
      </div>
    </div>
  );
}
