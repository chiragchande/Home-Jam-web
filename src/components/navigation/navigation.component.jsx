import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './navigation.style.css';
import Img from '../../assets/Img.png';
import Logo from '../../assets/logo.png';


class Navigation extends React.Component {
    render() {
        return (
        <div className="img">
          <div className="bg">
          <img src={Img}/>
          </div>
          
           <ReactBootstrap.Navbar collapseOnSelect expand="md" className="dark" variant="dark">        
              <ReactBootstrap.Navbar.Brand className="logo" href="#home">
                  <img className="logo-img" src={Logo} alt="Logo"/>
              </ReactBootstrap.Navbar.Brand>
              <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    
              <ReactBootstrap.Nav className="options">
              <i class="fa fa-search"></i>
              <ReactBootstrap.Nav.Link href="#search">Search</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="#help">Help</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link eventKey={2} href="#account">
                Account
              </ReactBootstrap.Nav.Link>
              <i class="fa fa-shopping-cart"></i>
              </ReactBootstrap.Nav>
              </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
              <div className="content">
                <h1>Cari Cari</h1>
                <p>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
              </div>
          </div>
        
        );
    }
}

export default Navigation;