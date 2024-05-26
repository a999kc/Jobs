import React, { useState } from 'react';
import './ResetPassword.css';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const validatePasswords = () => {
        if (password.length < 3 && password.length > 8 ) {
            setPasswordError('Пароль должен содержать минимум 3 символа и быть меньше 8');
        } else {
            setPasswordError('');
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Пароли не совпадают');
        } else {
            setConfirmPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validatePasswords();

        if (passwordError === '' && confirmPasswordError === '') {
            // Логика сброса пароля, например, отправка запроса на сервер для обновления пароля
            console.log(password,confirmPassword)
        }
    };

    return (
        <form className="reset_password_form" onSubmit={handleSubmit}>
            <h2 className="reset_password_h2">Сброс пароля</h2>
            <input
                className="reset_password_input"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Введите новый пароль"
            />
            {passwordError && <p className="reset_password_error">{passwordError}</p>}
            <input
                className="reset_password_input"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Подтвердите новый пароль"
            />
            {confirmPasswordError && <p className="reset_password_error">{confirmPasswordError}</p>}
            <button className="reset_password_button" type="submit">Сбросить пароль</button>
        </form>
    );
}