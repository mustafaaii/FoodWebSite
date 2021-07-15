import React from 'react'
import { Row, Col} from 'react-bootstrap'


export default function nav() {

 
    return (
        <>
        <Row >
            

            <Col lg="12"  style={{paddingLeft:"0"}}>
                <Row>
                <Col lg="12">
                <div className="NavSectionTittle">Sort by</div>
                </Col>
                </Row>
            </Col>
            <Col lg="12" >
                <Row>
                    <Col lg="12" >
                        <Row>
                            <Col lg="1">
                                <div class="radio">
                                    <input id="radio-1" name="radio" type="radio" />
                                    <label for="radio-1" class="radio_label"/>
                                </div>
                            </Col>
                            <Col lg="10">
                                Distance
                            </Col>
                        </Row>
                    </Col>

                    <Col lg="12" className="NavColPosition">
                        <Row>
                            <Col lg="1">
                                <div class="radio">
                                    <input id="radio-2" name="radio" type="radio" />
                                    <label for="radio-2" class="radio_label"/>
                                </div>
                            </Col>
                            <Col lg="10">
                                Recommended
                            </Col>
                        </Row>
                    </Col>

                    <Col lg="12"  className="NavColPosition">
                        <Row>
                            <Col lg="1">
                                <div class="radio">
                                    <input id="radio-3" name="radio" type="radio" />
                                    <label for="radio-3" class="radio_label"/>
                                </div>
                            </Col>
                            <Col lg="10">
                                Top rated
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col lg="12 pt-4" style={{paddingLeft:"0"}}>
                <Row>
                <Col lg="8">
                <div className="NavSectionTittle">Filters</div>
                </Col>
                <Col lg="4">
                <div className="NavSectionTittleReset">Reset</div>
                </Col>
                </Row>
            </Col>
            <Col lg="12">
                <Row>
                    <Col lg="12" >
                        <Row>
                            <Col lg="1">
                                <div class="checkbox">
                                <input type="checkbox" id="checkbox1" class="ww"  />
                                <label for="checkbox1" name="checkbox1" class="ww"></label>
                                </div>
                            </Col>
                            <Col lg="10">
                                <div className="NavCheckBoxText">Free delivery</div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg="12" className="NavColPosition">
                        <Row>
                            <Col lg="1">
                                <div class="checkbox">
                                <input type="checkbox" id="checkbox2" class="ww"  />
                                <label for="checkbox2" name="checkbox2" class="ww"></label>
                                </div>
                            </Col>
                            <Col lg="10">
                            <div className="NavCheckBoxText">Special offer</div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg="12" className="NavColPosition">
                        <Row>
                            <Col lg="1">
                                <div class="checkbox">
                                <input type="checkbox" id="checkbox3" class="ww"  />
                                <label for="checkbox3" name="checkbox3" class="ww"></label>
                                </div>
                            </Col>
                            <Col lg="10">
                            <div className="NavCheckBoxText">Open now</div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg="12" className="NavColPosition">
                        <Row>
                            <Col lg="1">
                                <div class="checkbox">
                                <input type="checkbox" id="checkbox3" class="ww"  />
                                <label for="checkbox3" name="checkbox3" class="ww"></label>
                                </div>
                            </Col>
                            <Col lg="10">
                            <div className="NavCheckBoxText">New</div>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg="12" className="NavColPosition">
                        <Row>
                            <Col lg="1">
                                <div class="checkbox">
                                <input type="checkbox" id="checkbox4" class="ww"  />
                                <label for="checkbox4" name="checkbox4" class="ww"></label>
                                </div>
                            </Col>
                            <Col lg="10">
                            <div className="NavCheckBoxText">Halal</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
           



        </>
    )
}
