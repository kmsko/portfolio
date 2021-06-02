import React from 'react'
import style from './footer.module.css'
import footerImage from '../../assets/image/footer.jpg'

const Footer = (props) => {
    return (
        <div className={style.footer}>
            <img className={style.footer_image} src={footerImage} alt="" />
        </div>
    )
}
export default Footer;