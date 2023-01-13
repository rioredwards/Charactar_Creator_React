import { useState } from 'react';
import Editor from '../layout/Editor/Editor.js';
import Preview from '../layout/Preview/Preview.js';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState('hat_black');
  const [torso, setTorso] = useState('hat_black');
  return (
    <>
      <main>
        <Editor {...{ head, setHead, torso, setTorso }} />
        <Preview head={head} torso={torso} />
      </main>
    </>
  );
}
