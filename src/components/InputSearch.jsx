import React, { useState, useEffect } from "react";
import './InputSearch.css'
import axios from 'axios';
import Cards from './Cards';
//json файл со списком профессий и их кратким описанием
const api='https://gist.githubusercontent.com/a999kc/e0a731fabc479632d56ebd5a59ad06ee/raw/07820eb3b92f0e82ab684a485814ea9e989051b6/gistfile1.txt'


export default function InputSearch({ onVacanciesUpdate }) {
    const [searchQuery, setSearchQuery] = useState(""); // Состояние для хранения введенного пользователем запроса
    const [vacanciesList, setVacanciesList] = useState([]); // Состояние для хранения списка профессий
    const [filteredProfessions, setFilteredProfessions] = useState([]); // Состояние для хранения отфильтрованных профессий
    const [selectedProfession, setSelectedProfession] = useState(""); // Состояние для выбранной профессии
    const [vacancies, setVacancies] = useState([]); // Состояние для хранения вакансий из API HH.ru
    const [loading, setLoading] = useState(false); // Состояние для отображения загрузки
    const [error, setError] = useState(null); // Состояние для отображения ошибок

    useEffect(() => {
        // Загрузка данных из api при монтировании компонента
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setVacanciesList(data);
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, []); // Пустой массив зависимостей указывает, что эффект должен выполниться только один раз при монтировании компонента

    useEffect(() => {
        // Фильтрация профессий при изменении поискового запроса
        if (searchQuery) {
            setFilteredProfessions(getOptions(searchQuery));
        } else {
            setFilteredProfessions([]);
        }
    }, [searchQuery]);

     const getOptions = (word) => {
        return vacanciesList.filter(item => {
            const regex = new RegExp(word, 'gi');
            return item.title.match(regex);
        });
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleProfessionClick = (profession) => {
        setSelectedProfession(profession);
        fetchVacancies(profession.title);
        setSearchQuery("");
        setFilteredProfessions([]);
    };

    const fetchVacancies = async (profession) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://api.hh.ru/vacancies', {
                params: {
                    text: profession,
                    page: 0,
                    per_page: 10
                }
            });
            setVacancies(response.data.items);
            onVacanciesUpdate(response.data.items);
        } catch (error) {
            setError('Ошибка при получении данных');
        } finally {
            setLoading(false);
        }
    };


    return (
            // <>
            //     <div className="search-1">
            //         <h2>Поиск по вакансиям</h2>
            //         <form className="section-search-form" action="обработчик_поиска.php" method="GET">
            //             <input value={searchQuery} onChange={handleInputChange} className="section-search-input" type="text" name="search_query" placeholder="Какая работа вам интересна?"></input>
            //             {/* Маппинг результатов фильтрации и вывод их в списке */}
            //                 { searchQuery!="" ? getOptions(searchQuery).map(item => {
            //                     return <div className="section-search-option"key={item.id}>{item.title}</div>
            //                 }) : ""}
            //             {/* <button className="section-search-btn" type="submit">Искать</button> */}
            //         </form>
            //     </div>
            // </>
            <div className="search-1">
            <h2>Поиск по вакансиям</h2>
            <form className="section-search-form" onSubmit={(e) => e.preventDefault()}>
                <input
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="section-search-input"
                    type="text"
                    name="search_query"
                    placeholder="Какая работа вам интересна?"
                />
                {searchQuery && (
                    <div className="section-search-options">
                        {filteredProfessions.map(item => (
                            <div
                                key={item.id}
                                className="section-search-option"
                                onClick={() => handleProfessionClick(item)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                )}
            </form>
            {loading && <p>Загрузка...</p>}
            {error && <p>{error}</p>}
           
            </div>
    );
    
}