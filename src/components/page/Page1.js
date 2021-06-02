import React from 'react';
import './../../App.css';
import style from './page1.module.css'
import logoReact from './../../assets/image/page1/logoReact.png'
import logoRedux from './../../assets/image/page1/redux.jpg'
import { connect } from 'react-redux';
import { detailsAC } from '../../redux/header-page'
import myPhoto from '../../assets/image/myPhoto.png'

let Page1 = (props) => {

 

    return (
        <div className={style.wrapper_page1}>
            {/* Моё фото */}
            <img className={style.myPhoto} src={myPhoto} alt="" />
            
            <div className={style.wrapper}>
                {/* logo react */}
                <div
                    onMouseEnter={(e) => props.detailsAC(1)}
                    onMouseLeave={(e) => props.detailsAC(false)}
                    className={style.wrapperCard}>
                    <img
                        className={style.img_logo}
                        src={logoReact}
                        alt="logoReact" />
                    <ul className={`${style.list} ${props.blockVision === 1 && style.list_active} `}>
                        <li>SPA</li>
                        <li>React-router-dom</li>
                        <li>High order component</li>
                        <li>Axios API</li>
                        <li>useState useEffect</li>
                    </ul>
                </div>
                {/* logo Redux */}
                <div
                    onMouseEnter={(e) => props.detailsAC(2)}
                    onMouseLeave={(e) => props.detailsAC(false)}
                    className={`${style.wrapperCard} `}>

                    <img className={style.img_logo} src={logoRedux} alt="logoRedux" />
                    <ul className={`${style.list}  ${props.blockVision === 2 && style.list_active} `}>
                        <li>React - Redux</li>
                        <li>redux-thunk</li>
                        <li>Business Logic Layers</li>
                        <li>FLUX</li>
                        <li>store state reselect</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        blockVision: state.headerPage.detailsTarget
    }
}

export default connect(mapStateToProps, { detailsAC })(Page1);