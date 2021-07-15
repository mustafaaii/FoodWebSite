import React from 'react'
import "./assets/restaurant_css/RestaurantCarousuel.css";

import { Card, Col, Row } from 'react-bootstrap';
import Image01 from "./assets/restaurant_img/img01.svg"
import Stars from "./assets/restaurant_img/icons/stars.svg"
import Price from "./assets/restaurant_img/icons/price.svg"
import Location from "./assets/restaurant_img/icons/location.svg"
import Time from "./assets/restaurant_img/icons/time.svg"

export default function restaurants() {
    return (
        <>

        <div className="restaurants-card-content">
         <h3 className="BodySectionTittle"  style={{marginLeft:"-35px"}}>Restaurants</h3>
         <Row style={{ maxWidth: 1250, marginLeft: '-50px', marginRight: '0px', marginTop: "10"}}>
            <Col lg="3" className="pt-1 pb-1 ">
                <Card className="restaurants-card">
                    <img src={Image01} alt="featured01" className="restaurants-img"></img>
                    <Row>
                        <Col lg="12">
                            <Row>
                               <Col lg="7">
                                    <div className="restaurants-title">Sushi Place</div>
                                </Col>
                                <Col lg="5">
                                    <div className="restaurants-stars"><img src={Stars} alt="stars" className="restaurants-stars-img"/></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12" className="pt-1">
                            <Row className="restaurants-icon-container">
                                <Col >
                                   <div className="restaurants-price-content">
                                      <img className="restaurants-price-img" src={Price} alt="price"/>
                                      <div className="restaurants-price-tittle">$ 4,50</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-time-content">
                                       <img className="restaurants-time-img" src={Time} alt="price"/>
                                       <div className="restaurants-time-tittle"> 20 - 30 min.</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-location-content">
                                       <img className="restaurants-location-img" src={Location} alt="price"/>
                                       <div className="restaurants-location-tittle">1,4 miles</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col> 
            <Col lg="3" className="pt-1 pb-1">
                <Card className="restaurants-card">
                    <img src={Image01} alt="featured01" className="restaurants-img"></img>
                    <Row>
                        <Col lg="12">
                            <Row>
                               <Col lg="7">
                                    <div className="restaurants-title">Sushi Place</div>
                                </Col>
                                <Col lg="5">
                                    <div className="restaurants-stars"><img src={Stars} alt="stars" className="restaurants-stars-img"/></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12" className="pt-1">
                            <Row className="restaurants-icon-container">
                                <Col >
                                   <div className="restaurants-price-content">
                                      <img className="restaurants-price-img" src={Price} alt="price"/>
                                      <div className="restaurants-price-tittle">$ 4,50</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-time-content">
                                       <img className="restaurants-time-img" src={Time} alt="price"/>
                                       <div className="restaurants-time-tittle"> 20 - 30 min.</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-location-content">
                                       <img className="restaurants-location-img" src={Location} alt="price"/>
                                       <div className="restaurants-location-tittle">1,4 miles</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col> 
            <Col lg="3" className="pt-1 pb-1">
                <Card className="restaurants-card">
                    <img src={Image01} alt="featured01" className="restaurants-img"></img>
                    <Row>
                        <Col lg="12">
                            <Row>
                               <Col lg="7">
                                    <div className="restaurants-title">Sushi Place</div>
                                </Col>
                                <Col lg="5">
                                    <div className="restaurants-stars"><img src={Stars} alt="stars" className="restaurants-stars-img"/></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12" className="pt-1">
                            <Row className="restaurants-icon-container">
                                <Col >
                                   <div className="restaurants-price-content">
                                      <img className="restaurants-price-img" src={Price} alt="price"/>
                                      <div className="restaurants-price-tittle">$ 4,50</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-time-content">
                                       <img className="restaurants-time-img" src={Time} alt="price"/>
                                       <div className="restaurants-time-tittle"> 20 - 30 min.</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-location-content">
                                       <img className="restaurants-location-img" src={Location} alt="price"/>
                                       <div className="restaurants-location-tittle">1,4 miles</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col> 
            <Col lg="3" className="pt-1 pb-1">
                <Card className="restaurants-card">
                    <img src={Image01} alt="featured01" className="restaurants-img"></img>
                    <Row>
                        <Col lg="12">
                            <Row>
                               <Col lg="7">
                                    <div className="restaurants-title">Sushi Place</div>
                                </Col>
                                <Col lg="5">
                                    <div className="restaurants-stars"><img src={Stars} alt="stars" className="restaurants-stars-img"/></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12" className="pt-1">
                            <Row className="restaurants-icon-container">
                                <Col >
                                   <div className="restaurants-price-content">
                                      <img className="restaurants-price-img" src={Price} alt="price"/>
                                      <div className="restaurants-price-tittle">$ 4,50</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-time-content">
                                       <img className="restaurants-time-img" src={Time} alt="price"/>
                                       <div className="restaurants-time-tittle"> 20 - 30 min.</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-location-content">
                                       <img className="restaurants-location-img" src={Location} alt="price"/>
                                       <div className="restaurants-location-tittle">1,4 miles</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col> 
            <Col lg="3" className="pt-1 pb-1">
                <Card className="restaurants-card">
                    <img src={Image01} alt="featured01" className="restaurants-img"></img>
                    <Row>
                        <Col lg="12">
                            <Row>
                               <Col lg="7">
                                    <div className="restaurants-title">Sushi Place</div>
                                </Col>
                                <Col lg="5">
                                    <div className="restaurants-stars"><img src={Stars} alt="stars" className="restaurants-stars-img"/></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12" className="pt-1">
                            <Row className="restaurants-icon-container">
                                <Col >
                                   <div className="restaurants-price-content">
                                      <img className="restaurants-price-img" src={Price} alt="price"/>
                                      <div className="restaurants-price-tittle">$ 4,50</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-time-content">
                                       <img className="restaurants-time-img" src={Time} alt="price"/>
                                       <div className="restaurants-time-tittle"> 20 - 30 min.</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-location-content">
                                       <img className="restaurants-location-img" src={Location} alt="price"/>
                                       <div className="restaurants-location-tittle">1,4 miles</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>          
            <Col lg="3" className="pt-1 pb-1">
                <Card className="restaurants-card">
                    <img src={Image01} alt="featured01" className="restaurants-img"></img>
                    <Row>
                        <Col lg="12">
                            <Row>
                               <Col lg="7">
                                    <div className="restaurants-title">Sushi Place</div>
                                </Col>
                                <Col lg="5">
                                    <div className="restaurants-stars"><img src={Stars} alt="stars" className="restaurants-stars-img"/></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12" className="pt-1">
                            <Row className="restaurants-icon-container">
                                <Col >
                                   <div className="restaurants-price-content">
                                      <img className="restaurants-price-img" src={Price} alt="price"/>
                                      <div className="restaurants-price-tittle">$ 4,50</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-time-content">
                                       <img className="restaurants-time-img" src={Time} alt="price"/>
                                       <div className="restaurants-time-tittle"> 20 - 30 min.</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-location-content">
                                       <img className="restaurants-location-img" src={Location} alt="price"/>
                                       <div className="restaurants-location-tittle">1,4 miles</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col> 
            <Col lg="3" className="pt-1 pb-1">
                <Card className="restaurants-card">
                    <img src={Image01} alt="featured01" className="restaurants-img"></img>
                    <Row>
                        <Col lg="12">
                            <Row>
                               <Col lg="7">
                                    <div className="restaurants-title">Sushi Place</div>
                                </Col>
                                <Col lg="5">
                                    <div className="restaurants-stars"><img src={Stars} alt="stars" className="restaurants-stars-img"/></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12" className="pt-1">
                            <Row className="restaurants-icon-container">
                                <Col >
                                   <div className="restaurants-price-content">
                                      <img className="restaurants-price-img" src={Price} alt="price"/>
                                      <div className="restaurants-price-tittle">$ 4,50</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-time-content">
                                       <img className="restaurants-time-img" src={Time} alt="price"/>
                                       <div className="restaurants-time-tittle"> 20 - 30 min.</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-location-content">
                                       <img className="restaurants-location-img" src={Location} alt="price"/>
                                       <div className="restaurants-location-tittle">1,4 miles</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col> 
            <Col lg="3" className="pt-1 pb-1">
                <Card className="restaurants-card">
                    <img src={Image01} alt="featured01" className="restaurants-img"></img>
                    <Row>
                        <Col lg="12">
                            <Row>
                               <Col lg="7">
                                    <div className="restaurants-title">Sushi Place</div>
                                </Col>
                                <Col lg="5">
                                    <div className="restaurants-stars"><img src={Stars} alt="stars" className="restaurants-stars-img"/></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="12" className="pt-1">
                            <Row className="restaurants-icon-container">
                                <Col >
                                   <div className="restaurants-price-content">
                                      <img className="restaurants-price-img" src={Price} alt="price"/>
                                      <div className="restaurants-price-tittle">$ 4,50</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-time-content">
                                       <img className="restaurants-time-img" src={Time} alt="price"/>
                                       <div className="restaurants-time-tittle"> 20 - 30 min.</div>
                                    </div>
                                </Col>
                                <Col >
                                    <div className="restaurants-location-content">
                                       <img className="restaurants-location-img" src={Location} alt="price"/>
                                       <div className="restaurants-location-tittle">1,4 miles</div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>      
         </Row>
         </div>
        </>
    )
}
