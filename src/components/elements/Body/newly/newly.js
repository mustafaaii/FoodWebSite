import React from 'react'
import Carousel from "./assets/newly_js/NewlyCarousel";
import "./assets/newly_css/NewlyCarousel.css";

import { Card, Col, Row } from 'react-bootstrap';
import Image01 from "./assets/newly_img/img01.svg"
import Stars from "./assets/newly_img/icons/stars.svg"
import Price from "./assets/newly_img/icons/price.svg"
import Location from "./assets/newly_img/icons/location.svg"
import Time from "./assets/newly_img/icons/time.svg"


export default function newly() {
    return (
                <>
                <div className="featured-card-content">
                <h3 className="BodySectionTittle"  style={{marginLeft:"-35px"}}>Newly added restaurants</h3>
                    <div style={{ maxWidth: 1200, marginLeft: '-40px', marginRight: '40px', marginTop: 10 }}>
                    <Carousel show={4} infiniteLoop>
                        <div>
                            <Card className="featured-card">
                               <img src={Image01} alt="featured01" className="featured-img"></img>
                               <Row>
                                    <Col lg="12">
                                        <Row>
                                            <Col lg="7">
                                                 <div className="featured-title">Sushi Place</div>
                                            </Col>
                                            <Col lg="5">
                                                <div className="featured-stars"><img src={Stars} alt="stars" className="featured-stars-img"/></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="12" className="pt-1">
                                        <Row className="feadtured-icon-container">
                                            <Col >
                                                <div className="featured-price-content">
                                                    <img className="featured-price-img" src={Price} alt="price"/>
                                                    <div className="featured-price-tittle">$ 4,50</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-time-content">
                                                    <img className="featured-time-img" src={Time} alt="price"/>
                                                    <div className="featured-time-tittle"> 20 - 30 min.</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-location-content">
                                                    <img className="featured-location-img" src={Location} alt="price"/>
                                                    <div className="featured-location-tittle">1,4 miles</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
        
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card className="featured-card">
                               <img src={Image01} alt="featured01" className="featured-img"></img>
                               <Row>
                                    <Col lg="12">
                                        <Row>
                                            <Col lg="7">
                                                 <div className="featured-title">Sushi Place</div>
                                            </Col>
                                            <Col lg="5">
                                                <div className="featured-stars"><img src={Stars} alt="stars" className="featured-stars-img"/></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="12" className="pt-1">
                                        <Row className="feadtured-icon-container">
                                            <Col >
                                                <div className="featured-price-content">
                                                    <img className="featured-price-img" src={Price} alt="price"/>
                                                    <div className="featured-price-tittle">$ 4,50</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-time-content">
                                                    <img className="featured-time-img" src={Time} alt="price"/>
                                                    <div className="featured-time-tittle"> 20 - 30 min.</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-location-content">
                                                    <img className="featured-location-img" src={Location} alt="price"/>
                                                    <div className="featured-location-tittle">1,4 miles</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
        
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card className="featured-card">
                               <img src={Image01} alt="featured01" className="featured-img"></img>
                               <Row>
                                    <Col lg="12">
                                        <Row>
                                            <Col lg="7">
                                                 <div className="featured-title">Sushi Place</div>
                                            </Col>
                                            <Col lg="5">
                                                <div className="featured-stars"><img src={Stars} alt="stars" className="featured-stars-img"/></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="12" className="pt-1">
                                        <Row className="feadtured-icon-container">
                                            <Col >
                                                <div className="featured-price-content">
                                                    <img className="featured-price-img" src={Price} alt="price"/>
                                                    <div className="featured-price-tittle">$ 4,50</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-time-content">
                                                    <img className="featured-time-img" src={Time} alt="price"/>
                                                    <div className="featured-time-tittle"> 20 - 30 min.</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-location-content">
                                                    <img className="featured-location-img" src={Location} alt="price"/>
                                                    <div className="featured-location-tittle">1,4 miles</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
        
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card className="featured-card">
                               <img src={Image01} alt="featured01" className="featured-img"></img>
                               <Row>
                                    <Col lg="12">
                                        <Row>
                                            <Col lg="7">
                                                 <div className="featured-title">Sushi Place</div>
                                            </Col>
                                            <Col lg="5">
                                                <div className="featured-stars"><img src={Stars} alt="stars" className="featured-stars-img"/></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="12" className="pt-1">
                                        <Row className="feadtured-icon-container">
                                            <Col >
                                                <div className="featured-price-content">
                                                    <img className="featured-price-img" src={Price} alt="price"/>
                                                    <div className="featured-price-tittle">$ 4,50</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-time-content">
                                                    <img className="featured-time-img" src={Time} alt="price"/>
                                                    <div className="featured-time-tittle"> 20 - 30 min.</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-location-content">
                                                    <img className="featured-location-img" src={Location} alt="price"/>
                                                    <div className="featured-location-tittle">1,4 miles</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
        
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card className="featured-card">
                               <img src={Image01} alt="featured01" className="featured-img"></img>
                               <Row>
                                    <Col lg="12">
                                        <Row>
                                            <Col lg="7">
                                                 <div className="featured-title">Sushi Place</div>
                                            </Col>
                                            <Col lg="5">
                                                <div className="featured-stars"><img src={Stars} alt="stars" className="featured-stars-img"/></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="12" className="pt-1">
                                        <Row className="feadtured-icon-container">
                                            <Col >
                                                <div className="featured-price-content">
                                                    <img className="featured-price-img" src={Price} alt="price"/>
                                                    <div className="featured-price-tittle">$ 4,50</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-time-content">
                                                    <img className="featured-time-img" src={Time} alt="price"/>
                                                    <div className="featured-time-tittle"> 20 - 30 min.</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-location-content">
                                                    <img className="featured-location-img" src={Location} alt="price"/>
                                                    <div className="featured-location-tittle">1,4 miles</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
        
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card className="featured-card">
                               <img src={Image01} alt="featured01" className="featured-img"></img>
                               <Row>
                                    <Col lg="12">
                                        <Row>
                                            <Col lg="7">
                                                 <div className="featured-title">Sushi Place</div>
                                            </Col>
                                            <Col lg="5">
                                                <div className="featured-stars"><img src={Stars} alt="stars" className="featured-stars-img"/></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="12" className="pt-1">
                                        <Row className="feadtured-icon-container">
                                            <Col >
                                                <div className="featured-price-content">
                                                    <img className="featured-price-img" src={Price} alt="price"/>
                                                    <div className="featured-price-tittle">$ 4,50</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-time-content">
                                                    <img className="featured-time-img" src={Time} alt="price"/>
                                                    <div className="featured-time-tittle"> 20 - 30 min.</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-location-content">
                                                    <img className="featured-location-img" src={Location} alt="price"/>
                                                    <div className="featured-location-tittle">1,4 miles</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
        
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card className="featured-card">
                               <img src={Image01} alt="featured01" className="featured-img"></img>
                               <Row>
                                    <Col lg="12">
                                        <Row>
                                            <Col lg="7">
                                                 <div className="featured-title">Sushi Place</div>
                                            </Col>
                                            <Col lg="5">
                                                <div className="featured-stars"><img src={Stars} alt="stars" className="featured-stars-img"/></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="12" className="pt-1">
                                        <Row className="feadtured-icon-container">
                                            <Col >
                                                <div className="featured-price-content">
                                                    <img className="featured-price-img" src={Price} alt="price"/>
                                                    <div className="featured-price-tittle">$ 4,50</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-time-content">
                                                    <img className="featured-time-img" src={Time} alt="price"/>
                                                    <div className="featured-time-tittle"> 20 - 30 min.</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-location-content">
                                                    <img className="featured-location-img" src={Location} alt="price"/>
                                                    <div className="featured-location-tittle">1,4 miles</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
        
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card className="featured-card">
                               <img src={Image01} alt="featured01" className="featured-img"></img>
                               <Row>
                                    <Col lg="12">
                                        <Row>
                                            <Col lg="7">
                                                 <div className="featured-title">Sushi Place</div>
                                            </Col>
                                            <Col lg="5">
                                                <div className="featured-stars"><img src={Stars} alt="stars" className="featured-stars-img"/></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="12" className="pt-1">
                                        <Row className="feadtured-icon-container">
                                            <Col >
                                                <div className="featured-price-content">
                                                    <img className="featured-price-img" src={Price} alt="price"/>
                                                    <div className="featured-price-tittle">$ 4,50</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-time-content">
                                                    <img className="featured-time-img" src={Time} alt="price"/>
                                                    <div className="featured-time-tittle"> 20 - 30 min.</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-location-content">
                                                    <img className="featured-location-img" src={Location} alt="price"/>
                                                    <div className="featured-location-tittle">1,4 miles</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
        
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card className="featured-card">
                               <img src={Image01} alt="featured01" className="featured-img"></img>
                               <Row>
                                    <Col lg="12">
                                        <Row>
                                            <Col lg="7">
                                                 <div className="featured-title">Sushi Place</div>
                                            </Col>
                                            <Col lg="5">
                                                <div className="featured-stars"><img src={Stars} alt="stars" className="featured-stars-img"/></div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="12" className="pt-1">
                                        <Row className="feadtured-icon-container">
                                            <Col >
                                                <div className="featured-price-content">
                                                    <img className="featured-price-img" src={Price} alt="price"/>
                                                    <div className="featured-price-tittle">$ 4,50</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-time-content">
                                                    <img className="featured-time-img" src={Time} alt="price"/>
                                                    <div className="featured-time-tittle"> 20 - 30 min.</div>
                                                </div>
                                            </Col>
                                            <Col >
                                                <div className="featured-location-content">
                                                    <img className="featured-location-img" src={Location} alt="price"/>
                                                    <div className="featured-location-tittle">1,4 miles</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
        
                                </Row>
                            </Card>
                        </div>
        
                       </Carousel>
                   </div>
                </div>
                </>
    )
}
