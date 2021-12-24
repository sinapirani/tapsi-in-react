import React from 'react'
import {ReactComponent as Logo} from '../pics/logo.svg'

function Header(){

    return(
        <header className="header">
        <nav className="headernav"> 
            <Logo/>


            <ul className="headerList">
                <li><p>پشتیبانی</p></li>
                <li><p>خدمات کسب و کارها</p></li>
                <li><p>فرصت های شغلی</p></li>
                <li><p>وبلاگ</p></li>
                <li id="itemTapsi">دانلود تپسی</li>
            </ul>
        </nav>
    </header>
    )
}

export default Header