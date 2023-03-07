import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const inputButtonRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const focus = () => {
    inputButtonRef.current.focus();
  };

  return (
    <div className="App">
      <input type="text" ref={inputRef} id="text" name="text" />
      <label>
        <input
          type="text"
          ref={inputButtonRef}
          id="buttonRef"
          name="buttonRef"
        />
        <button onClick={focus}>ustaw focus na input</button>
      </label>
    </div>
  );
}

export default App;
