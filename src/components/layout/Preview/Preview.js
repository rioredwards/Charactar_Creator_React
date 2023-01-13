import './Preview.css';

export default function Preview() {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div className="char_container">
        <img className="head" src={`char_images/head/hat_black.png`} />
        <img className="torso" src={`char_images/torso/merry.png`} />
        <img className="legs" src={`char_images/legs/pants_short_brown.png`} />
        <p className="catch-phrase">TEMP Catch phrase</p>
      </div>
    </div>
  );
}
