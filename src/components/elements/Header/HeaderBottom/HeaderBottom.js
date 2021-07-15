import React from 'react'
import { Container } from 'react-bootstrap';
import HeaderLocation from './HeaderLocation';
import HeaderProfile from './HeaderProfile'
import HeaderSearchBar from './HeaderSearchBar';
import HeaderTabButton from './HeaderTabButton';

export default function HeaderBottom() {
    return (
        <>
            <Container className="pt-3">
                <HeaderTabButton/>
                <HeaderSearchBar/>
                <HeaderLocation/>
                <HeaderProfile/>
            </Container>
        </>
    )
}
