import React, { useState } from 'react';


export default function ForgetPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //логика сброса пароля, например, отправка запроса на сервер для сброса пароля
        //onResetPassword(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Сброс пароля</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите ваш email" />
            <button type="submit">Сбросить пароль</button>
        </form>
    );
}