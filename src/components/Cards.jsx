import React, { useEffect, useState } from 'react';
import * as ActualVacancies from '../actual_vacancies.json'

// export let CardsFixedArray = []

// function ActualVacanciesFix(ActualVacancies) {
//     for (let item of ActualVacancies.items) {
//         let newItem = {
//             id: null,
//             name: null,
//             area: null,
//             salary: null,
//             apply_alternate_url: null,
//             url: null,
//             alternate_url: null,
//             employer: null,
//             snippet: null,
//             schedule: null,
//             professional_roles: null,
//             experience: null,
//             employment: null,
//         }
//         for(let key of Object.keys(newItem)){
//             if(item.hasOwnProperty(key)) {
//                 newItem[key]=item[key]
//             }
//         }
//         console.log(newItem)
//         CardsFixedArray.push(newItem)
//     }
// }


// ActualVacanciesFix(ActualVacancies)


// export default function Cards({ vacancies }) {
//     const listItems = CardsFixedArray.map((vacancy) => (

//         <div className="actual-vacancy" key={vacancy.id}>
//             <a href={vacancy.employer.url}>{vacancy.employer.name}</a>
//             <a href={vacancy.alternate_url}>{vacancy.name}</a>
//             <span>{vacancy.area.name}</span>
//             <span>{vacancy.salary ? `${vacancy.salary.from} - ${vacancy.salary.to} ${vacancy.salary.currency}` : 'No salary information'}</span>
//             <span>{vacancy.snippet ? `${vacancy.snippet.requirement} ${vacancy.snippet.responsibility}` : 'No snippet information'}</span>
//         </div>

//     ));

//     return (

//         <section className="section-actual-vacancies">
//             <h2>
//                 Актуальные вакансии
//             </h2>
//         <div className="actual-vacancies-list">
//             {listItems}
//         </div>
//         </section>
//         )
// }


export default function Cards({ vacancies =[]}) {
    const listItems = vacancies.map((vacancy) => (
        <div className="actual-vacancy" key={vacancy.id}>
            <a href={vacancy.employer.url}>{vacancy.employer.name}</a>
            <a href={vacancy.alternate_url}>{vacancy.name}</a>
            <span>{vacancy.area.name}</span>
            <span>{vacancy.salary ? `${vacancy.salary.from} - ${vacancy.salary.to} ${vacancy.salary.currency}` : 'No salary information'}</span>
            <span>{vacancy.snippet ? `${vacancy.snippet.requirement} ${vacancy.snippet.responsibility}` : 'No snippet information'}</span>
        </div>
    ));

    return (
        <section className="section-actual-vacancies">
            <h2>Актуальные вакансии</h2>
            <div className="actual-vacancies-list">
                {listItems}
            </div>
        </section>
    );
}