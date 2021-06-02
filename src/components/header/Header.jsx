import React, { useState } from 'react';
import './../../App.css';
import style from './header.module.css';
import { connect } from 'react-redux';
import { menuCondition } from '../../redux/header-page';

let Header = (props) => {
    let menuOff = () => {
        setmyJob_active(false)
        setContacts_active(false)
        props.menuCondition(!props.menu)
    }

    const [contacts_Active, setContacts_active] = useState(false);

    let activeContacts = (contacts_Active) => {
        setmyJob_active(false)
        setContacts_active(!contacts_Active)
    }
    const [myJob_Active, setmyJob_active] = useState(false);

    let activeMyJob = (myJob_Active) => {
        setContacts_active(false)
        setmyJob_active(!myJob_Active)
    }

    const [hoverMenu, setHoverMenu] = useState({
        top: 15
    });

    let position = (e) => {
        let pos = e.target.offsetTop
        setHoverMenu({ top: pos })
    }

    let arch = () => {
        menuOff()
        document.getElementById("aboutMe").scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <div className={style.header_container}>
            {/* hamburger */}
            <div onClick={menuOff} className={style.menu_hamburger}>
                <span className={`${props.menu && style.menu_hamburger_active} ${style.menu_hamburger_span}`}></span>
                <span className={`${props.menu ? style.menu_hamburger_active : style.menu_hamburger_span} `}></span>
                <span className={`${props.menu && style.menu_hamburger_active} ${style.menu_hamburger_span}`}></span>
            </div>


            {/* header контент*/}
            <div className={style.wrapper_header_content}>
                <span className={style.name}>Макс Котовщиков</span>
                <span > Front-End </span>
                <span >разработчик</span>
            </div>

            {/* МЕНЮ */}
            <ul className={`${style.menu} ${props.menu && style.menu_active}`}>



                <button className={style.menu__button_list}
                    onMouseEnter={(e) => { position(e) }}
                    onClick={(e) => { activeContacts(contacts_Active) }}

                >
                    <span
                        style={hoverMenu}
                        className={style.menu_marker}>
                    </span>
                    Контакты</button>

                <ul

                    className={` 
                        ${style.menu__list} 
                        ${contacts_Active === true && style.menu__list_active}`}>
                    <li><a href="https://vk.com/kotnic3" target="_blank" rel="noopener noreferrer" >vk</a></li>
                    <li><a href="https://www.instagram.com/m.k0t/"  target="_blank" rel="noopener noreferrer">instagram</a></li>
                    <li><a href="https://t.me/Kmsko"  target="_blank" rel="noopener noreferrer">telegram</a></li>
                    <li><a href="https://github.com/kmsko"  target="_blank" rel="noopener noreferrer">Git</a></li>
                    <li><a href="https://wa.me/79994570405"  target="_blank" rel="noopener noreferrer">WhatsApp</a></li>





                </ul>

                <button
                    onMouseEnter={(e) => { position(e) }}
                    className={style.menu__button_list}
                    onClick={(e) => activeMyJob(myJob_Active)}
                >
                    Мои работы
                     </button>
                <ul className={`${style.menu__list} ${myJob_Active === true && `${style.menu__list_active} ${style.menu__list_active_myJob}`}`}>
                    <a href="https://kmsko.github.io/myswim/" target="_blank" rel="noopener noreferrer">landing</a>
                    <a href="https://kmsko.github.io/" target="_blank" rel="noopener noreferrer">
                        Планшет
                    </a>
                    <a href="https://kmsko.github.io/socialnetwokkmsko/" target="_blank" rel="noopener noreferrer">
                        Соц сеть
                    </a>
                </ul>
                <button className={style.menu__button_list} onClick={arch} onMouseEnter={(e) => { position(e) }}
                >О себе</button>
            </ul>



        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        menu: state.headerPage.menu
    }
}
export default connect(mapStateToProps, { menuCondition })(Header);;