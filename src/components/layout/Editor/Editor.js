import { useState } from 'react';
import './Editor.css';

export default function Editor({ head, setHead, torso, setTorso, legs, setLegs, setCatchphrases }) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    console.log(`In handleChange: ${e.target.name}: ${e.target.value}`);
    e.target.name === 'head' && setHead(e.target.value);
    e.target.name === 'torso' && setTorso(e.target.value);
    e.target.name === 'legs' && setLegs(e.target.value);
    e.target.name === 'catchPhraseInput' && setInputValue(e.target.value);
  };
  const handleClick = (e) => {
    console.log(`In handleClick: ${e.target.name}: ${inputValue}`);
    e.target.name === 'catchphraseSubmit' &&
      setCatchphrases((currentState) => [...currentState, inputValue]);
    setInputValue('');
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
          <select name="torso" value={torso} onChange={handleChange}>
            <option value="merry">merry</option>
            <option value="legolas">legolas</option>
            <option value="leather_armour3">blue_horn_2</option>
            <option value="isildur">isildur</option>
            <option value="half_plate2.">half_plate2.</option>
            <option value="dragonarm_cyan">dragonarm_cyan</option>
            <option value="chainmail">chainmail</option>
            <option value="bplate_metal1">bplate_metal1</option>
            <option value="banded2">banded2</option>
            <option value="arwen">arwen</option>
            <option value="armor_blue_gold">armor_blue_gold</option>
          </select>
        </div>

        <div className="form-control">
          <label>Legs</label>
          <select name="legs" value={legs} onChange={handleChange}>
            <option value="pants_short_brown">pants_short_brown</option>
            <option value="trouser_green">trouser_green</option>
            <option value="skirt_green">skirt_green</option>
            <option value="skirt_blue">skirt_blue</option>
            <option value="pants_l_white">pants_l_white</option>
            <option value="pants_blue">pants_blue</option>
            <option value="pants_black">pants_black</option>
            <option value="loincloth_red">loincloth_red</option>
            <option value="leg_armor05">leg_armor05</option>
            <option value="leg_armor01">leg_armor01</option>
            <option value="leg_armor00">leg_armor00</option>
          </select>
        </div>

        <div className="form-control">
          <label>Catch Phrase</label>
          <input value={inputValue} onChange={handleChange} type="text" name="catchPhraseInput" />
          <button onClick={handleClick} name="catchphraseSubmit">
            Submit
          </button>
        </div>
      </div>
      <p>TEMP number of changes for: </p>
    </div>
  );
}
