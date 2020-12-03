import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/Recommended.scss';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import store from '../store/store'


function Products(){
  return store.getState().products.map(product =>
    <Col className="recommended-services_list">
      <Card className="services">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <div className="details">
            <div className="price">{product.price}</div>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>  
          </div>
          <Button variant="danger" onClick={() => store.dispatch({type: 'addCart', product: product})}>Agregar</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

function Recommended() {
  return (
    <>
      <Header />
      <div className="App">
        <Container>
          <h3 className="recommended-services">También te puede interesar</h3>
          <Row>
            {Products()}
          </Row>
        </Container>
        <span className="input-group-btn">
          <Link to="/checkout">Finalizar compra</Link>
        </span>
      </div>
      <Footer />
    </>
  );
}


export default Recommended;

