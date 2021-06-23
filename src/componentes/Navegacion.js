import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap';
import Carro from './Caro';

class Navegacion extends React.Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
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
