import React from 'react'
import { Nav } from 'react-bootstrap'
import '../../Header/assets/header.css'
import Location from '../../../../assets/img/header/location.svg'
import LocationSeacrh from '../../../../assets/img/header/SearchLocation.svg'


export default function HeaderLocation() {
    return (
        <>
        <Nav>
        <div class="main">
        <div class="form-group has-search">
            <span  class="form-control-feedback"><div className="HeaderSearchIcon"><img src={LocationSeacrh} alt="imag" height={{height:"50px"}}/></div></span>
            <input type="text" class="form-control HeaderSeacrhInput" placeholder="Search location" />
            <span  class="form-control-feedback-location"><div className="HeaderLocationIcon"><img src={Location} alt="imag" height={{height:"50px"}}/></div></span>
        </div>
        </div>
        </Nav>
        </>
        
    )
}
