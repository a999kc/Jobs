import './Profile.css'
import React,{useState} from 'react';
import Cards from './Cards'
import InputSearch from './InputSearch';
import Header from './Header';

import axios from 'axios';

import { Link } from 'react-router-dom';
export default function Profile() {

    const [vacancies, setVacancies] = useState([]);
    const [page, setPage] = useState(0);
    const [filters, setFilters] = useState({});

    const handleVacanciesUpdate = (newVacancies) => {
        setVacancies(newVacancies);
        setPage(1);
    };

    // const loadMoreVacancies = async () => {
    //     const response = await axios.get('https://api.hh.ru/vacancies', {
    //         params: {
    //             text: filters.profession,
    //             page: page,
    //             per_page: 10,
    //             salary: filters.salary,
    //             area: filters.city,
    //             skill: filters.skills
    //         }
    //     });
    //     setVacancies([...vacancies, ...response.data.items]);
    //     setPage(page + 1);
    // };


    // const handleVacanciesUpdate = (newVacancies) => {
    //     setVacancies(newVacancies);
    // };

    const [selectedProfession, setSelectedProfession] = useState('');

    return (
        <> 
            <div className='container'>
                <Header/>
                <main className="main">
                    <section className="section-search">
                        <InputSearch onVacanciesUpdate={handleVacanciesUpdate} onProfessionSelect={setSelectedProfession} />
                        <div className="search-2">
                            <h2>Узнай,что тебе подходит!</h2>
                            <Link to="/Test"><button type="submit">Пройти тест</button></Link>
                        </div>
                    </section>
                    {selectedProfession && <Cards profession={selectedProfession} />}
                    {/* <Cards vacancies={vacancies}/> */}

                </main>
            </div>
        </>
    )
}