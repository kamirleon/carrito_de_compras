import React from "react";
import Producto from "./componentes/Producto";
import "./App.css";
import { Container, Row } from 'reactstrap';
import Navegacion from "./componentes/Navegacion";
import {listaProductos} from './listaProducto.json';


console.log(listaProductos);

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      listaProductos
    };
  }
  render(){
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        return(
          <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          descripcion={listaProductos.descripcion}
          precio={listaProductos.precio}
          stock={listaProductos.stock}
          />
        )
      }
    );
  return (
    <Container>
      <Navegacion titulo="Mi primer sitio de compras en React"/>
      <Row>
        {arregloComponentes}
      </Row>
    </Container>
  );
  }
}

export default App;
