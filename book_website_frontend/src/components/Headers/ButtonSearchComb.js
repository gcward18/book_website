import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import {Navbar, Button, Nav, Form, Container} from 'react-bootstrap';
import * as Plus from 'react-icons/lib/fa/plus-square';
import Dropdown from './DropDown';

export default class ButtonSearchComb extends Component{
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div className="button-search-combo">
                
                <Dropdown ></Dropdown>

                <Form>
                    <Form.Control className="select-dropdown-form" type="text" placeholder={this.props.search}/>

                </Form>
                <Button className="add-button"><Plus/></Button>
            </div>
        );
    }
}

