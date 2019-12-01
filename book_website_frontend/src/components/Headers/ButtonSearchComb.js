import React, { Component } from 'react';
import {Button, Form} from 'react-bootstrap';
import { 
    HashRouter,
    Route 
} from 'react-router-dom';
import * as Plus from 'react-icons/lib/fa/plus-square';
import Dropdown from './DropDown';

export default class ButtonSearchComb extends Component{

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         choice :'AUTHOR'
    //     }
    //     this.updateChoice = choice => {
    //         this.setState({choice});
    //     }
    // }
    // render() {
    //     return (
    //         <div className="button-search-combo">
                
    //             <Dropdown updateChoice={this.updateChoice} ></Dropdown>
    
    //             <Form>
    //                 <Form.Control 
    //                     className="select-dropdown-form" 
    //                     style={{
    //                         position:'fixed', 
    //                         left:'70px'
    //                     }} 
    //                     type="text" 
    //                     placeholder={this.state.choice}
    //                 />
    //             </Form>
    //             <Button className="add-button"><Plus/></Button>
    //         </div>
    //     );
    // }
    
}