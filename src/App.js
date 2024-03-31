//import logo from './logo.svg';
import './App.css';
import './components/Registration.jsx'
import React, { useEffect } from 'react'
import RegistrationForm from './components/Registration.jsx'
import Profile from './components/Profile.jsx'

import Cards from './components/Cards.jsx'
import { CardsFixedArray } from './components/Cards.jsx';

export default function App() {
  const [isRegistered, setIsRegistered] = React.useState(false);

  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  };

  console.log(CardsFixedArray)
  return (
    <div className="App">
      {/* <RegistrationForm/> */}
      {/* <Profile /> */}
      {isRegistered ? (
        <Profile />
      ) : (
        <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
      )}
    </div>
    
  );
}


