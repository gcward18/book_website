import React, { Component } from 'react';
import ButtonSearchCombo from './ButtonSearchComb';
import {Navbar, Button, Nav, Form, Dropdown, Container} from 'react-bootstrap';
import List from 'react-icons/lib/fa/list';
import * as Plus from 'react-icons/lib/fa/plus-square';
import './MainHeader.css';


export default class MainHeader extends Component {
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