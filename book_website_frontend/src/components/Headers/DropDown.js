import React, { Component } from 'react';
import List from 'react-icons/lib/fa/list';
import './DropDown.css';
export default class DropDown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
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
      <div style={{display:'block', width:'60px'}}>
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
                <button> Author</button>
                <button> Title </button>
                <button> Year </button>
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