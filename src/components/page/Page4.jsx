import React from 'react'
import style from './page4.module.css'
const Page4 = (props) => {
    return <div className={style.wrapper}>
        <span id="aboutMe" ></span>
        <div className={style.titel}>-Обо мне-</div>

        <ul className={style.description}>
            <li>Развивающийся front-end разработчик</li>
            <li>Проходил курсы в&nbsp;онлайн школе geekbrains в&nbsp;направление Front-end</li>
            <li>Изучил HTML 5, CSS 3, JS&nbsp;ES6, React JS </li>
            <li>Владею базовыми заниями о&nbsp;препроцессорах SASS LESS</li>
            <li>Каждый день совершенствую умения и&nbsp;изучаю новые технологии</li>
            <li>В&nbsp;перспективе изучить TypeScript</li>
            <li>Ищу работу в&nbsp;команде с&nbsp;опытными разработчиками</li>
            <li>За&nbsp;душой только некоммерческие проекты</li>
        </ul>
    </div>
}
export default Page4