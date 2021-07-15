import React from 'react'
import { Row, Col,Container } from 'react-bootstrap'
import { BrowserRouter as Link } from 'react-router-dom'
import '../elements/Footer/assets/footer_css/footer.css'
import GooglePlay from '../elements/Footer/assets/img/googleplay.svg'
import AppStore from '../elements/Footer/assets/img/appstore.svg'



export default function footer() {
    return (
        <>
            <div className="footer-content">
                <Container style={{marginRight:"290px"}}>
                    <Row className="pt-5">
                      <Col lg="3">
                          <Row>
                            <Col lg="12" className="footer-logo"> <Link>Here That's Logo</Link></Col>
                            <Col lg="12" className="footer-text pt-3"> <Link>About us</Link></Col>
                            <Col lg="12" className="footer-text pt-3"> <Link>Careers</Link></Col>
                            <Col lg="12" className="footer-text pt-3"> <Link>Restaurant signup</Link></Col>
                            <Col lg="12" className="footer-text pt-3"> <Link>Become a rider</Link></Col>
                          </Row>
                      </Col>
                      <Col lg="3">
                      <Row>
                            <Col lg="12" className="footer-tittle"> <Link>Legal</Link></Col>
                            <Col lg="12" className="footer-text pt-3"> <Link>Term & contitions</Link></Col>
                            <Col lg="12" className="footer-text pt-3"> <Link>Privacy</Link></Col>
                            <Col lg="12" className="footer-text pt-3"> <Link>Tax rates</Link></Col>
                          </Row>
                      </Col>
                      <Col lg="3">
                          <Row>
                            <Col lg="12" className="footer-tittle"> <Link>Help</Link></Col>
                            <Col lg="12" className="footer-text pt-3"> <Link>Contact</Link></Col>
                            <Col lg="12" className="footer-text pt-3"> <Link>FAQs</Link></Col>
                            <Col lg="12" className="footer-text pt-3"> <Link>Site map</Link></Col>
                          </Row>
                      </Col>
                      <Col lg="3">
                        <Row>
                            <Col lg="12" className="footer-tittle"> <Link>Download the App</Link></Col>
                            <Col lg="12" className="pt-4"> <Link><img src={AppStore} alt=""  className="footer-application-icon"/></Link></Col>
                            <Col lg="12" className="pt-3"> <Link><img src={GooglePlay} alt=""   className="footer-application-icon"/></Link></Col>
                          </Row>
                      
                      </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
