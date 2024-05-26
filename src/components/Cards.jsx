import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cards.css'


const cleanDescription = (description) => {
    // Проверка на существование описания и удаление тегов HTML
    return description ? description.replace(/<[^>]+>/g, '') : '';
  };

const formatSalary = (salary) => {
    if (!salary) return '-';
    
    const { from, to } = salary;
    
    // Если есть только нижняя граница
    if (from && !to) {
      return `от ${from} ${salary.currency}`;
    }
    
    // Если есть обе границы
    if (from && to) {
      return `${from} - ${to} ${salary.currency}`;
    }
    
    // В противном случае
    return '-';
};
  


export default function Cards({ profession }) {
    const [vacancies, setVacancies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [cityFilter, setCityFilter] = useState('');
    const [companyFilter, setCompanyFilter] = useState('');

    useEffect(() => {
        fetchVacancies();
    }, [profession]);

    const fetchVacancies = async (page = 0) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://api.hh.ru/vacancies', {
                params: {
                    text: profession,
                    page: page,
                    per_page: 10
                }
            });
            if (page === 0) {
                setVacancies(response.data.items);
            } else {
                setVacancies(prevVacancies => [...prevVacancies, ...response.data.items]);
            }
            setCurrentPage(page);
        } catch (error) {
            setError('Ошибка при получении данных');
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        fetchVacancies(currentPage + 1);
    };


    const sortBySalaryAsc = () => {
        const sortedVacancies = [...vacancies].sort((a, b) => {
            const salaryA = a.salary ? a.salary.from || 0 : 0;
            const salaryB = b.salary ? b.salary.from || 0 : 0;
            return salaryA - salaryB;
        });
        setVacancies(sortedVacancies);
    };

    const sortBySalaryDesc = () => {
        const sortedVacancies = [...vacancies].sort((a, b) => {
            const salaryA = a.salary ? a.salary.from || 0 : 0;
            const salaryB = b.salary ? b.salary.from || 0 : 0;
            return salaryB - salaryA;
        });
        setVacancies(sortedVacancies);
    };
   

    const filteredVacancies = vacancies.filter(vacancy => 
        (vacancy.area.name.toLowerCase().includes(cityFilter.toLowerCase())) &&
        (vacancy.employer.name.toLowerCase().includes(companyFilter.toLowerCase()))
    );

    return (
        <section className="section-actual-vacancies">
            <h2>Актуальные вакансии</h2>
            <div className="sort-buttons">
                <button onClick={sortBySalaryAsc}>Сортировать по возрастанию зарплаты</button>
                <button onClick={sortBySalaryDesc}>Сортировать по убыванию зарплаты</button>
            </div>
            <div className="filters">
                <input 
                    type="text" 
                    placeholder="Фильтр по городу" 
                    value={cityFilter} 
                    onChange={(e) => setCityFilter(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Фильтр по компании" 
                    value={companyFilter} 
                    onChange={(e) => setCompanyFilter(e.target.value)} 
                />
            </div>
            <div className="actual-vacancies-list">
                {filteredVacancies.map(vacancy => (
                    <div className="actual-vacancy" key={vacancy.id}>
                        <a href={vacancy.employer.url}>{vacancy.employer.name}</a>
                        <a href={vacancy.alternate_url}>{vacancy.name}</a>
                        <span>{vacancy.area.name}</span>
                        <span className="salary">{formatSalary(vacancy.salary)}</span>
                        <span>{vacancy.snippet ? `${cleanDescription(vacancy.snippet.requirement)} ${cleanDescription(vacancy.snippet.responsibility)}` : 'No snippet information'}</span>
                    </div>
                ))}
            </div>
            {loading && <p>Загрузка...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <button onClick={handleLoadMore} className="load-more-button">Загрузить еще</button>
            )}
        </section>
    );
}



