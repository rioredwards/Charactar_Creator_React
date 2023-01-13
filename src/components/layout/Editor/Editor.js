import './Editor.css';

export default function Editor() {
  return (
    <div className="editor">
      <h2>Editor</h2>
      <div className="editor-controls">
        <div className="form-control">
          <label>Head</label>
          <select name="head">
            <option value="TEMP-Option">TEMP-Option</option>
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
