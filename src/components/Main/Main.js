import Editor from '../layout/Editor/Editor.js';
import './Main.css';

export default function Main() {
  return (
    <>
      <main>
        <Editor className="TEMP-preview-container" />
        <div className="TEMP-editor-container" />
      </main>
    </>
  );
}
