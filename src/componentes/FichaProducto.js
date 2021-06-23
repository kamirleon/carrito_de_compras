import React from 'react';
import './FichaProducto.css';
import { listaCarrito } from '../listaCarrito.json';
import { Button, Container, Modal, ModalFooter, ModalHeader, ModalBody, CardImg } from 'reactstrap';

class FichaProducto extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false,
      listaCarrito,
      stock: props.props.stock
    }
    this.toggle = this.toggle.bind(this);
    this.agregarCarrito = this.agregarCarrito.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  agregarCarrito() {
    listaCarrito.push({
      "titulo": this.props.props.titulo,
      "precio": this.props.props.precio
    });
    this.setState(prevState =>({
      modal: !prevState.modal,
      stock: prevState.stock -1
    }));

  }
  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Ver Ficha</Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>{this.props.props.titulo}</ModalHeader>
          <ModalBody>
            <CardImg src={this.props.props.imagen} />
            <p> El detalle de este artículo es: </p>
            {this.props.props.descripcion}
            <p>Este Producto tiene un valor de $ {this.props.props.precio} </p>
            <p> Hay <b>{this.state.stock}</b> unidades de este producto disponible</p>

          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
            <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
          </ModalFooter>
        </Modal>
      </Container>

    )
  };
}

export default FichaProducto;
