import './Profile.css'
import React from 'react';
import Cards from './Cards'

export default function Profile() {
    return (
        <> 
            <div className='container'>
                <header className='header'>
                
                    <div className='header-left'>
                        <img src="#" alt="logo"/>
        
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
                            <img src="#" alt="Иконка профиля"/>
                        </a>
                    </div>
            
                </header>

                <main className="main">
            
                    <section className="section-search">
                        <div className="search-1">
                            <h2>Поиск по вакансиям</h2>
                            <form className="section-search-form" action="обработчик_поиска.php" method="GET">
                                <input className="section-search-input" type="text" name="search_query" placeholder="Какая работа вам интересна?"></input>
                                <button className="section-search-btn" type="submit">Искать</button>
                            </form>
                        </div>

                        <div className="search-2">
                            <h2>Узнай,что тебе подходит!</h2>
                            <button type="submit">Пройти тест</button>
                        </div>

                        <div className="search-3">
                            <h2>Ключевые навыки</h2>
                            <div>
                                <button type="submit">Навык 1</button>
                                <button type="submit">Навык 2</button>
                                <button type="submit">Навык 3</button>
                            </div>
                        </div>


                        

                    </section>

                    <Cards/>
            
                </main>
            </div>

            
        </>
    )
}