import React from 'react'
import { Nav } from 'react-bootstrap'
import '../../Header/assets/header.css'
import UserIcon from '../../../../assets/img/header/users/user.svg'


export default function HeaderProfile() {
    return (
        <>
            <Nav>
                <div className="HeaderProfile"><img src={UserIcon} alt="" style={{borderRadius:"50px"}}/></div>
            </Nav>
        </>
    )
}
