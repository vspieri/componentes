import React from 'react'
import Style from "./header.module.css"
import { TextField } from '@mui/material'
function Header(props) {
  return (
    <header className={Style.header} style={{backgroundColor:props.cor}}>
        <div className={Style.logo}>
        <img src={props.src} alt="logo" />
        </div>
        <div className={Style.central}>
            <div className={Style.busca}>
            <TextField fullWidth id='standard-basic' label="standard" variant='standard'/>
            </div>
            <div className={Style.menu}>
                <nav>
                    <ul>
                        <li><a href="a">teste</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header