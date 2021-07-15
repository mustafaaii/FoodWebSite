import React from 'react'
import { Nav} from 'react-bootstrap'
import '../../Header/assets/header.css'
import HeaderSearch from '../../../../assets/img/header/HeaderSearch.svg'


export default function HeaderSearchBar() {
    return (
        <>
        <Nav className="mr-3">
        <div class="main">
        <div class="form-group has-search">
            <span  class="form-control-feedback"><div className="HeaderSearchIcon"><img src={HeaderSearch} alt="imag" height={{height:"50px"}}/></div></span>
            <input type="text" class="form-control HeaderSeacrhInput" placeholder="Search restorant"/>
        </div>
        </div>
        </Nav>
        </>
    )
}
