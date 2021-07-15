import React from 'react';
import { Nav} from 'react-bootstrap';
import '../assets/header.css';
export default function HeaderMenu() {
    return (
        <>
                <Nav>
                    <Nav className="HeaderMenuText active">Home</Nav>
                    <Nav className="HeaderMenuText">Work with us</Nav>
                    <Nav className="HeaderMenuText">Basket</Nav>
                    <Nav className="HeaderMenuText">Order</Nav>
                    <Nav className="HeaderMenuText">Sign out</Nav>
                </Nav>
        </>
    )
}
