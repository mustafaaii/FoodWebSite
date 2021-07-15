import React from 'react'
import { Row, Col,Container } from 'react-bootstrap'
import NavBar from '../elements/Body/nav/nav'
import Cuisine from '../elements/Body/cuisine/cuisine'
import Featured from '../elements/Body/featured/featured'
import Newly from '../elements/Body/newly/newly'
import Restaurants from '../elements/Body/restaurants/restaurants'
import '../elements/Body/assets/body.css'



export default function body() {
    return (
        <>
        <Container className="pt-5" style={{paddingBottom:"250px"}}>
           <Row>
                <Col lg="3">
                    <NavBar/>
                </Col>   
                <Col lg="9">
                    <Cuisine/>
                    <Featured/>
                    <Newly/>
                    <Restaurants/>
                </Col>      
            </Row> 
        </Container>
        </>
    )
}
