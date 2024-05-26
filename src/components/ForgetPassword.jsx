import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ForgetPassword.css'

export default function ForgetPassword() {
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('')
    const [formValid, setFormValid] = React.useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            setEmailError('Некорректный email');
        } else {
            setEmailError('');
        }
    };

    useEffect(() => {
        if (emailError || email === '') {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //логика сброса пароля, например, отправка запроса на сервер для сброса пароля
        //onResetPassword(email);
    };


    
    

    return (
        <form className="forget_password_form" onSubmit={handleSubmit}>
            <h2 className="forget_password_h2">Сброс пароля</h2>
            {emailError && <p className="forget_password_error">{emailError}</p>} {/* Отображение ошибки */}
            <input className="forget_password_input" type="email" value={email} onChange={(e) => handleEmailChange(e)} onBlur={e => validateEmail(e)} placeholder="Введите ваш email" />
            <Link to="/ResetPassword"><button onClick={() =>{console.log(email)}}className="forget_password_button" type="submit"  disabled={!formValid} // Отключаем кнопку, если есть ошибка
            >Сбросить пароль</button></Link>
        </form>
    );
}