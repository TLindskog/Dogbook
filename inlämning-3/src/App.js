import React from 'react';
import {DogProvider} from './DogContext'
import AddDog from './AddDog'
import Home from './Home';
import Profile from './Profile';
import './App.css'
import Edit from './Edit';

const App = () => {
  return (
    <DogProvider>
      <div className ="home">
        <Home/>
        <Profile/>
        <AddDog/>
        <Edit/>
      </div>
    </DogProvider>
  )
}
export default App;
