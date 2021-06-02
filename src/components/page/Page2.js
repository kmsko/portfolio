import React, { useState } from 'react';
import './../../App.css';
import style from './page2.module.css'

let Page2 = (props) => {

    const [curtain, setCurtain] = useState(false);
    


    return (
        <div
            onMouseEnter={(e) => setCurtain(true)}
            onMouseLeave={(e) => setCurtain(false)}
            className={style.wrapper}>
            
            <h2 className={`${style.title} ${curtain && style.title_close}`}>JavaScript</h2>
           
            <span className={`${style.title_edition} ${curtain && style.title_edition_close}`}>ES 6</span>
           
           
            <ul className={`${style.list} ${curtain && style.list_active}`}>
                <li>Циклы, массивы, структуры данных, операторы</li>
                <li>Объекты в JavaScript</li>
                <li>DOM обработка событий</li>
                <li>Анонимные функции, замыкания</li>
                <li>ООП </li>
                <li>Асинхронные запросы</li>
            </ul>
        </div>
    )
}


export default Page2;