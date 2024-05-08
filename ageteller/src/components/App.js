import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AgeStats from "./AgeStats";

import './App.css';

function App() {
  const [inputDate, setInputDate] = useState('')
  const [birthday, setBirthday] = useState('')
  const [showStats, setShowStats] = useState(false)

  const changeBirthday = () => {
    setBirthday(inputDate)
    setShowStats(true)
  }
  
  useEffect(() => {
    setShowStats(false)
  },[inputDate])
  
  return (
    <div className="App"> 
      <Form inline="true">
        <h2>Input Your Birthday!</h2>
        <div className="input">
          <Form.Control type="date" className="date" onChange={e => setInputDate(e.target.value)}/>
          {' '}
          <Button onClick={changeBirthday}>Submit</Button>
        </div>
        {showStats &&
            <div className="fade age-stats">
              <AgeStats date={birthday}/>
            </div>
        }
      </Form>
    </div>
  );
}

export default App;

