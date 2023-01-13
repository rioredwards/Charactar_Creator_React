import { useState } from 'react';
import Editor from '../layout/Editor/Editor.js';
import Preview from '../layout/Preview/Preview.js';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState('hat_black');
  return (
    <>
      <main>
        <Editor head={head} setHead={setHead} />
        <Preview head={head} />
      </main>
    </>
  );
}
