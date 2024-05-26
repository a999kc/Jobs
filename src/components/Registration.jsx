
import './Registration.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import { router } from '../App';
// { onRegistrationSuccess }

import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

const supabaseUrl = 'https://mzqjwiuyyzcookevinbr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cWp3aXV5eXpjb29rZXZpbmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2NzM1MDgsImV4cCI6MjAzMDI0OTUwOH0.8-2fjOOrfrY5UO6HMVl3CH_dQ5DnTHkl7gpSmTF22pE';
const supabase = createClient(supabaseUrl, supabaseKey);





export default function RegistrationForm() {

    const [redirect, setRedirect] = useState(false); // Состояние для перенаправления
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [emailDirty,setEmailDirty] = React.useState(false)
    const [passwordDirty,setPasswordDirty] = React.useState(false)
    const [emailError, setEmailError] = React.useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым')
    const [formValid,setFormValid] = React.useState(false)
  
    useEffect(()=> {
      if(emailError || passwordError) {
        setFormValid(false)
      } else {
        setFormValid(true)
      }
    }, [emailError, passwordError])
  
    const emailHandler = (e) => {
      setEmail(e.target.value)
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
      if(!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Некорректный email')
      } else {
        setEmailError('')
      }
  
    }
  
  
    const passwordHandler = (e) => {
      setPassword(e.target.value) 
      if(e.target.value.length < 3 || e.target.value > 8) {
        setPasswordError("Пароль должен быть длиннее 3 символов и короче 8")
        if(!e.target.value) {
          setPasswordError('Пароль не может быть пустым')
        }
      } else {
        setPasswordError('')
      }
    }
  
  
    const blurHandler = (e) => {
      switch(e.target.name) {
        case 'email':
          setEmailDirty(true)
          break
        case 'password':
          setPasswordDirty(true)
          break
      }
    }


    function submitForm(email, password) {
      console.log(email, password)
      
    }

    // const submitHandler = async () => {
        
    //     try {
    //         const { user, error } = await supabase.auth.signUp({email,password});
    //         if (error) {
    //             console.error('Error registering user:', error.message);
    //             // Обработка ошибки регистрации пользователя
    //         } else {
    //             console.log('User registered successfully:', user);
    //             // Пользователь успешно зарегистрирован
    //             // Можете добавить дополнительные действия, например, перенаправление пользователя
    //         }
    //     } catch (error) {
    //         console.error('Error registering user:', error.message);
    //         // Обработка других ошибок
    //     }
    //     submitForm(email, password);

    // }


    const hashPassword = async (password) => {
      try {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          return hashedPassword;
      } catch (error) {
          console.error('Error hashing password:', error);
          throw error;
      }
    };

    const submitHandler = async (e) => {
      e.preventDefault();
      if (!formValid) return;

  
      try {
        const hashedPassword = await hashPassword(password);
        const { user, error } = await supabase.auth.signUp({ email, password: hashedPassword });
        if (error) {
          console.error('Error registering user:', error.message);
        } else {
          console.log('User registered successfully:', user.email,user.password );
  
          // Добавление данных пользователя в таблицу
          const { error: insertError } = await supabase
            .from('users')
            .insert([{ email: user.email, hashed_password: hashedPassword, created_at: new Date(),preferences: null }]);
            
          if (insertError) {
            console.error('Error inserting user data:', insertError.message);
          } else {
            console.log('User data inserted successfully');
            setRedirect(true);
          }
        }
      } catch (error) {
        console.error('Error registering user:', error.message);
      }
      submitForm(email, password)
    };


    if (redirect) {
      // Используйте метод перенаправления, например, react-router-dom's useHistory
      // history.push('/main');
      // или компонент <Redirect /> из react-router-dom
    }

    
    console.log(email)
    console.log(password)
    console.log(redirect)
   

    return (
      <div className="registration-form-div">
        <form className="registration-form">
          <h1 className="registration-form-header">Вход</h1>
          {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
          <input className="registration-form-input" onChange={(e) => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Введите ваш e-mail..."></input>
  
          {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
          <input className="registration-form-input" onChange={(e) => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Введите ваш пароль..."></input>
  
          <button className="registration-form-btn" onClick={submitHandler} disabled={!formValid} type="submit"><Link to='/main'>ВОЙТИ</Link></button>
          
          <Link to='/ForgetPassword'>Забыли пароль?</Link>
        </form>
      </div>
    );
  }


  