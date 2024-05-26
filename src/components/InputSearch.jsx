import React, { useState, useEffect } from "react";
import './InputSearch.css';
import axios from 'axios';

const api = 'https://gist.githubusercontent.com/a999kc/e0a731fabc479632d56ebd5a59ad06ee/raw/f9c0d6b4eb2071fb6fe2b2e69da5efab185745d4/gistfile1.txt'
export default function InputSearch({ onProfessionSelect }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [vacanciesList, setVacanciesList] = useState([]);
    const [filteredProfessions, setFilteredProfessions] = useState([]);

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setVacanciesList(data);
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, []);

    useEffect(() => {
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
        onProfessionSelect(profession.title); // Убедитесь, что вызывается правильная функция
        setSearchQuery("");
        setFilteredProfessions([]);
    };

    return (
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
        </div>
    );
}
