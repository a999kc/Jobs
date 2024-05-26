//import logo from './logo.svg';
import './App.css';
import './components/Registration.jsx'
import React, { useEffect } from 'react'
import RegistrationForm from './components/Registration.jsx'
import Profile from './components/Profile.jsx'
import NotFoundPage from './components/NotFoundPage.jsx';
import { Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Cards from './components/Cards.jsx'
//import { CardsFixedArray} from './components/Cards.jsx';
import ForgetPassword from './components/ForgetPassword.jsx';
import Test from './components/Test.jsx';
import ResetPassword from './components/ResetPassword.jsx'

export const router = createBrowserRouter([
  { path:"/",
    element:<RegistrationForm/>,
    errorElement: <NotFoundPage/>
  },
  { path:"/main",
    element:<Profile/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:"/ForgetPassword",
    element:<ForgetPassword/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:"/Test",
    element:<Test/>,
    errorElement:<NotFoundPage/>
  },
  {
    path:"/ResetPassword",
    element:<ResetPassword/>,
    errorElement:<NotFoundPage/>
  },

])

export default function App() {
  const [isRegistered, setIsRegistered] = React.useState(false);

  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  };

  console.log(Cards)
  return (
    <RouterProvider router={router}>
      <div className="App">
                <Routes>
                    <Route path="/" element={<RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />} />
                    <Route path="/main" element={<Profile/>} />
  
                </Routes>
      </div>
    </RouterProvider>
  
    
  );
}


