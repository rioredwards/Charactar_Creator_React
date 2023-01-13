import { useState } from 'react';
import Editor from '../layout/Editor/Editor.js';
import Preview from '../layout/Preview/Preview.js';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState('hat_black');
  const [torso, setTorso] = useState('merry');
  const [legs, setLegs] = useState('pants_short_brown');

  return (
    <>
      <main>
        <Editor {...{ head, setHead, torso, setTorso, legs, setLegs }} />
        <Preview {...{ head, torso, legs }} />
      </main>
    </>
  );
}
