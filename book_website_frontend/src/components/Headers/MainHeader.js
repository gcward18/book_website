import React, { Component } from 'react';
import {Navbar, Button, Nav, Form, FormControl, Container} from 'react-bootstrap';
import List from 'react-icons/lib/fa/list';
import * as Plus from 'react-icons/lib/fa/plus-square';
import './MainHeader.css';

function ButtonSearchCombo(props) {
    return (
        <div className="button-search-combo">
             <Button className="select-dropdown-button"><List/></Button>
             <Form>
                 <Form.Control className="select-dropdown-form" type="text" placeholder={props.search}/>
             </Form>
             <Button className="add-button"><Plus/></Button>
        </div>
    );
}

class MainHeader extends Component {
    render() {
        return (
            <Container className="MainHeader">
                <Navbar className="navbar" bg="light" variant="light">
                    <ButtonSearchCombo search="author"/>                    
                </Navbar>
            </Container>
        );
    }
}


export default MainHeader;