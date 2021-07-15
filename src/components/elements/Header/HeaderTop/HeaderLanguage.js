/* eslint-disable react/jsx-no-duplicate-props */
import {React,  useState } from 'react'
import '../../../../assets/css/style.css'

import EnglishCR from '../../../../assets/img/header/Flag/circle/English.svg'
import DuctchCR from '../../../../assets/img/header/Flag/circle/Ductch.svg'
import FrenchCR from '../../../../assets/img/header/Flag/circle/French.svg'
import GermanCR from '../../../../assets/img/header/Flag/circle/German.svg'


import EnglishSQ from '../../../../assets/img/header/Flag/squre/English.svg'
import DuctchSQ from '../../../../assets/img/header/Flag/squre/Dutch.svg'
import FrenchSQ from '../../../../assets/img/header/Flag/squre/French.svg'
import GermanSQ from '../../../../assets/img/header/Flag/squre/German.svg'

import '../../Header/assets/header.css'
import { Modal,ListGroup, ListGroupItem  } from 'react-bootstrap'



export default function HeaderLanguage() 
{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    return (
        <>
            <a href="#" variant="primary" onClick={handleShow}>
            <div className="HeaderLanguageContent">
                <img src={EnglishSQ} alt="" className="HeaderLanguage"/>
            </div>
            </a>

            <Modal show={show}  className="HeaderLanguageModal" size="sm" onHide={handleClose} backdrop="static" keyboard={true} onClick={true} backdrop="statick">
            <div className="HeaderLanguageModalContent">
                <ListGroup>
                    <ListGroupItem className="HeaderLanguageList">
                       <img src={EnglishCR} alt="" style={{height:"23px",width:"23px", borderRadius:"20px"}} className="mr-2"/> English
                    </ListGroupItem>
                    <ListGroupItem className="HeaderLanguageList">
                       <img src={DuctchCR} alt="" style={{height:"23px",width:"23px", borderRadius:"20px"}} className="mr-2"/> Dutch
                    </ListGroupItem>
                    <ListGroupItem className="HeaderLanguageList">
                       <img src={FrenchCR} alt="" style={{height:"23px",width:"23px", borderRadius:"20px"}} className="mr-2"/> French
                    </ListGroupItem>
                    <ListGroupItem className="HeaderLanguageList">
                       <img src={GermanCR} alt="" style={{height:"23px",width:"23px", borderRadius:"20px"}} className="mr-2"/> German
                    </ListGroupItem>
                </ListGroup>
            </div>
        </Modal>
        </>
    )
}
