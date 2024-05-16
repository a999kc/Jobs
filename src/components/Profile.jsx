import './Profile.css'
import React,{useState} from 'react';
import Cards from './Cards'
import InputSearch from './InputSearch';
import Header from './Header';

import { Link } from 'react-router-dom';
export default function Profile() {

    const [vacancies, setVacancies] = useState([]);

    const handleVacanciesUpdate = (newVacancies) => {
        setVacancies(newVacancies);
    };

    return (
        <> 
            <div className='container'>
                <Header/>
                <main className="main">
                    <section className="section-search">
                        <InputSearch onVacanciesUpdate={handleVacanciesUpdate} />
                        <div className="search-2">
                            <h2>Узнай,что тебе подходит!</h2>
                            <Link to="/Test"><button type="submit">Пройти тест</button></Link>
                        </div>
                    </section>
                    <Cards vacancies={vacancies}/>
                </main>
            </div>
        </>
    )
}