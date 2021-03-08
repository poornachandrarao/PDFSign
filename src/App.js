import React, { useState } from 'react';
import './App.css';
import Editor from './Editor';
import Viewer from './Viewer';
import makePDF from './makePDF';

const defaultValue = makePDF
  .toString()
  .split('\n')
  .slice(1, -1)
  .join('\n')
  .replace(/^ {2}/gm, '');

function App() {
  const [value, setValue] = useState(defaultValue);

  const onChange = (newValue) => {
    setValue(newValue);
  }

  return (
    <> 
       <Viewer value={value}  />
    </>
  );
}

export default App;