import React from "react";


export default function Header(){


    return (
        <>
            <header className='header'>
                
                    <div className='header-left'>
                        <img src={require('./logomain.png')} alt="logo"/>
        
                        <ul className="header-left-list">
                            <li>
                                Компании
                            </li>

                            <li>
                                Зарплаты
                            </li>

                            <li>
                                Форумы
                            </li>

                            <li>
                                Статьи
                            </li>

                        </ul>
                    </div>
                    <div className='header-right'>
                        <a href="#">
                            <img src={require('./lk.png')} alt="Иконка профиля"/>
                        </a>
                    </div>
            
            </header>
        </>
    )
}