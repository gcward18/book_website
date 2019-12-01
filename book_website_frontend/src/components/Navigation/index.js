import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import * as Plus from 'react-icons/lib/fa/plus-square';
import List from 'react-icons/lib/fa/list';
import * as Home from 'react-icons/lib/fa/home';
import * as ROUTES from '../../constants/routes';
import './Naviagation.css';
import book_back from '../../imgs/book_back.jpg';

var sectionStyle = {
    // backgroundImage: `url(${book_back})`,
    // backgroundSize: 'cover',
    backgroundColor: 'aqua',
    marginBottom: '0px',
    borderRadius: '5px'
}
const Navigation = () => (
  <div>
    <NavigationAuth/>
  </div>  
);

class NavigationAuth extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
        <Navbar className="bg-light justify-content-between nav" >
      {/* style={sectionStyle}> */}
            <Navbar.Brand href={ROUTES.HOME} >
                <Home className="icon"/>
            </Navbar.Brand>

            <Navbar.Collapse>
            <Nav className="ml-auto">
                <NavDropdown 
                    title={
                        <List className="icon dropdown"/>
                    } 
                    id="collasible-nav-dropdown"
                    className="dropdown"
                >
                    {/* <NavDropdown.Item href={ROUTES.TITLE}>TITLE</NavDropdown.Item> */}
                    <NavDropdown.Item href={ROUTES.AUTHOR}>AUTHOR</NavDropdown.Item>
                    <NavDropdown.Item href={ROUTES.YEARS}>YEARS</NavDropdown.Item>
                    <NavDropdown.Item href={ROUTES.PLAYGROUND}>PLAYGROUND</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href={ROUTES.ADD_BOOK} ><Plus className="icon"/></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
  }
}
export default Navigation;