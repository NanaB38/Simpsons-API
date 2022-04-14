import './App.css';
import axios from 'axios';
import DisplayCharacter from './components/DisplayCharacter';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [character, setCharacter] = useState();
  React.useEffect(() => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((answer) => answer.data)
      .then((data) => {
        setCharacter(data[0]);
      });
  }, []);
  return (
    <div className='App'>
      <DisplayCharacter character={character} />
    </div>
  );
}
