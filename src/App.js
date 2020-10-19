import React, { useEffect } from 'react';
import './App.scss';
import Card from './Card';
import Form from './Form';
import { useLocalStorage, useSetState } from 'react-use';
import { useSpreadSheet } from './utils/spreadsheet';
import config from "./constants/config.json";

function App() {
  const [forms, setForms] = useSetState({});
  const [data] = useSpreadSheet(config.spreadsheetId, "B3:G1000");
  const [startLine, setStartLine] = useLocalStorage(1);


  useEffect(() => {
    const lines = [...data].splice(startLine, 4);
    console.log('lines ->', lines);
    
    lines.forEach((line, index) => {
      setForms({
        [`f${index + 1}`]: line
      })
    })
  }, [data, startLine, setForms]);

  return (
    <div className="App">
      <div className="cards">
      {Object.keys(forms).map(key => {
        const data = forms[key] || {};
        return <Card key={key} code={data.code} title={data.title} subtitle={data.subtitle} />
      })}
      </div>
      <div className="forms">
      {Object.keys(forms).map((key, index) => {
        const data = forms[key] || {};
        return <Form data={data} name="Card" key={key} index={index+1} onChange={change => setForms({[key]: change})} />
      })}
      </div>
      <div className="config">
        <input type="number" value={startLine} onChange={ev => setStartLine(ev.target.value)} placeholder="Starting line" />
      </div>
    </div>
  );
}

export default App;
