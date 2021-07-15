import {React} from "react";
import { Nav, Button } from 'react-bootstrap'





function HeaderTabButton() {

    return (
        <>
        <Nav className="mr-1 HeaderTabsButtonContent">
        
            <Button variant="outline-light" className="HeaderTabsButton active mr-2">Delivery</Button>
            <Button variant="outline-light" className="HeaderTabsButton ">Pickup</Button>
       
        </Nav>
        </>
    )
}



export default HeaderTabButton;

  




