import React from 'react';
import './Navegacion.css';
import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap';
import Carro from './Carro';

class Navegacion extends React.Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand className="titulo" href="/">{this.props.titulo}</NavbarBrand>
        <Nav className="m-lg-auto" navbar>
          <NavItem>
            <Carro/>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navegacion;
