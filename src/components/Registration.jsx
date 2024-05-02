
import './Registration.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import { router } from '../App';
// { onRegistrationSuccess }
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

    const submitHandler = () => {
        if (formValid) {
            //onRegistrationSuccess();
            setRedirect(true); // Устанавливаем состояние перенаправления на true после успешной регистрации
            
        }
    }
    console.log(email)
    console.log(password)
    return (
      <div className="registration-form-div">
        <form className="registration-form">
          <h1 className="registration-form-header">Вход</h1>
          {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
          <input className="registration-form-input" onChange={(e) => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Введите ваш e-mail..."></input>
  
          {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
          <input className="registration-form-input" onChange={(e) => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Введите ваш пароль..."></input>
  
          <button className="registration-form-btn" onClick={submitHandler} disabled={!formValid} type="submit"><Link to='/main'>ВОЙТИ</Link></button>
          {/* <a href="/forgot-password">Забыли пароль?</a> */}
          <Link to='/ForgetPassword'>Забыли пароль?</Link>
        </form>
      </div>
    );
  }
