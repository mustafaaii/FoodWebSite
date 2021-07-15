import React from 'react'
import {Container} from 'react-bootstrap';
import HeaderLogo from './HeaderLogo';
import HeaderLanguage from './HeaderLanguage'
import HeaderMenu from './HeaderMenu';

export default function HeaderTop() {
    return (
        <>
             <Container className="pt-3">
                <HeaderLogo/>
                <HeaderMenu/>
                <HeaderLanguage/>
            </Container>
        </>
    )
}
