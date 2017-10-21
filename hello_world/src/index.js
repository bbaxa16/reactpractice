import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

const person = {
  personName: 'Nick',
  personAge: 88,
  favorites: [
    'lions',
    'tigers',
    'bears'
  ]
}

ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
    animals={person.favorites}
  />,
  document.getElementById('root')
)
