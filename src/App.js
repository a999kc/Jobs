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
import { CardsFixedArray} from './components/Cards.jsx';
import ForgetPassword from './components/ForgetPassword.jsx';

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
  }
])

export default function App() {
  const [isRegistered, setIsRegistered] = React.useState(false);

  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  };

  console.log(CardsFixedArray)
  return (
    // <div className="App">
    //  {/* <RegistrationForm/>
    //   {/* <Profile /> */}
    //   {isRegistered ? (
    //     <Profile />
    //   ) : (
    //     <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
    //   )}
    // </div>
    // <Router>
    // <div className="App">
    //   <Routes>
    //     <Route path="*" element={<RegistrationForm />} />
    //     <Route path="*" element={<Profile />} />
    //     {/* Другие маршруты приложения */}
    //   </Routes>
    // </div>
    // </Router>
    <RouterProvider router={router}>
      <div className="App">
                {/* <Routes>
                    <Route path="/" element={<RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />} />
                    <Route path="/main" element={<MainPage />} />
                </Routes> */}
      </div>
    </RouterProvider>
  
    
  );
}


