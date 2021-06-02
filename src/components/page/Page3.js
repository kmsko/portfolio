import React, { useState } from 'react'
import style from './page3.module.css'
import myPhotoJob from '../../assets/image/myPhotoJob.jpg'
const Page3 = (props) => {

    const [activeHtml, setactiveHtml] = useState(false);
    const [activeCss, setactiveCss] = useState(false);
    const [activeMyJob, setactiveMyJob] = useState(false);

    const setActive = (action) => {
        switch (action) {
            case "HTML": return (setactiveHtml(true), setactiveCss(false), setactiveMyJob(false))
            case "CSS": return (
                setactiveHtml(false),
                setactiveCss(true),
                setactiveMyJob(false))
            case "MyJob": return (setactiveHtml(false), setactiveCss(false), setactiveMyJob(true))
            default: return (setactiveHtml(false), setactiveCss(false), setactiveMyJob(false))
        }
    }

    return (
        <div className={style.wrapper}>

            <img className={style.myPhoto} src={myPhotoJob} alt="myphotojob" />



            <div className={style.wrapper__text_titel}>
                <button onClick={(e) => setActive("HTML")} className={` ${activeHtml ? style.button_active: ''}`}>HTML 5</button>
                <button onClick={(e) => setActive("CSS")} className={` ${activeCss ?style.button_active: ''}`}>CSS 3</button>
                <button onClick={(e) => setActive("MyJob")} className={` ${activeMyJob ? style.button_active: ''}`}>Мои работы</button>
            </div>



            <ul className={`${style.list} ${activeHtml && style.active}`}>
                <li> HTML 5 </li>
                <li> Семанитическая вёрстка </li>
                <li> Блочная вёрстка </li>
                <li> Базовые теги </li>
                <li> Встраивание элементов </li>
                <li> Форматирование текста </li>
            </ul>
            <ul className={`${style.list} ${activeCss && style.active}`}>
                <li> CSS 3 </li>
                <li> Адаптивная вёрстка</li>
                <li>Flex Box</li>
                <li>Анимация</li>
            </ul>
            <ul className={`${style.list} ${activeMyJob && style.active}`}>
                <li> landing page </li>
                <li> SPA </li>
                <li> Сайт визитка </li>
            </ul>

        </div>
    )
}

export default Page3