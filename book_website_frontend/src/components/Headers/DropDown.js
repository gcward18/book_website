import React, { Component } from 'react';
import List from 'react-icons/lib/fa/list';
import './DropDown.css';
export default class DropDown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false,
      choice: this.props.choice,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div style={{display:'block'}}>
        <button className="main-dropdown-button" onClick={this.showMenu}>
          <List/>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div style={{backgroundColor:'white', borderRadius:'5px'}}
                className="menu"
                
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button className='list-button' onClick={() => {this.props.updateChoice('AUTHOR')}}> Author</button>
                <button className='list-button' onClick={() => {this.props.updateChoice('TITLE')}}> Title </button>
                <button className='list-button' onClick={() => {this.props.updateChoice('YEAR')}}> Year </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}