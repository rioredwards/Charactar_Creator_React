import './Editor.css';

export default function Editor({ head, setHead }) {
  const handleChange = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`);
    event.target.name === 'head' && setHead(event.target.value);
  };

  return (
    <div className="editor">
      <h2>Editor</h2>
      <div className="editor-controls">
        <div className="form-control">
          <label>Head</label>
          <select name="head" value={head} onChange={handleChange}>
            <option value="hat_black">hat_black</option>
            <option value="black_horn_1">black_horn_1</option>
            <option value="blue_horn_2">blue_horn_2</option>
            <option value="clown_1">clown_1</option>
            <option value="cone_blue">cone_blue</option>
            <option value="crown_gold_1">crown_gold_1</option>
            <option value="dyrovepreva">dyrovepreva</option>
            <option value="fhelm_horn_yellow">fhelm_horn_yellow</option>
          </select>
        </div>

        <div className="form-control">
          <label>Torso</label>
          <select name="torso">
            <option value="TEMP-Option">TEMP-Option</option>
          </select>
        </div>

        <div className="form-control">
          <label>Legs</label>
          <select name="legs">
            <option value="TEMP-Option">TEMP-Option</option>
          </select>
        </div>

        <div className="form-control">
          <label>Catch Phrase</label>
          <textarea name="catchPhrase" />
          <button>Add</button>
        </div>
      </div>
      <p>TEMP number of changes for: </p>
    </div>
  );
}
