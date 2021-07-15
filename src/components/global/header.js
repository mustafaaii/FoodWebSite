import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar} from 'react-bootstrap';
import '../elements/Header/assets/header.css';

import HeaderTop from '../elements/Header/HeaderTop/HeaderTop.js';
import HeaderBottom from '../elements/Header/HeaderBottom/HeaderBottom.js';
export default function header() {
    return (
        <>
        
           
            <div  className="WebHeader">
            <Navbar>
                <HeaderTop/>
            </Navbar>
            <Navbar>
                <HeaderBottom />
            </Navbar>
            </div>
        </>
    )
}
