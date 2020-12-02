import React from 'react';
import logo from '../static/seguro1.jpg';
import imgrobo from '../static/segurorobo.jpg';
import imgaccident from '../static/accident.jpg';
import mascotas from '../static/mascotas.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/Recommended.scss';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Recommended() {
  return (
    <>
      <Header />
      <div className="App">
        <Container>
          <h3 className="recommended-services">También te puede interesar</h3>
          <Row>
            <Col className="recommended-services_list">
              <Card className="services">
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                  <div className="details">
                    <div className="price">$19.892</div>
                    <Card.Title>Seguro de Auto todo riesgo</Card.Title>
                    <Card.Text>
                      El Seguro Todo Riesgo busca proteger tu patrimonio de daños propios o daños causados a terceros
                </Card.Text>
                  </div>
                  <Button variant="warning">Agregar</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="recommended-services_list">
              <Card className="services">
                <Card.Img variant="top" src={imgrobo} />
                <Card.Body>
                  <div className="details">
                    <div className="price">$19.892</div>
                    <Card.Title>Seguro robo</Card.Title>
                    <Card.Text>
                      indemnizar al asegurado por los daños sufridos a consecuencia de la desaparición
                </Card.Text>
                  </div>
                  <Button variant="warning">Agregar</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
        <Container>
          <Row>
            <Col className="recommended-services_list">
              <Card className="services">
                <Card.Img variant="top" src={imgaccident} />
                <Card.Body>
                  <div className="details">
                    <div className="price">$19.892</div>
                    <Card.Title>Seguro Accidentes Personales</Card.Title>
                    <Card.Text>
                      Con el seguro de accidentes personales cuentas con el mejor apoyo en los momentos más difíciles.
                </Card.Text>
                  </div>
                  <Button variant="warning">Agregar</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="recommended-services_list">
              <Card className="services">
                <Card.Img variant="top" src={mascotas} />
                <Card.Body>
                  <div className="details">
                    <div className="price">$19.892</div>
                    <Card.Title>Seguro mascotas</Card.Title>
                    <Card.Text>
                      Estar preparado es la mejor opción para proteger la vida de aquellos peluditos a los que tanto amamos.
                  </Card.Text>
                  </div>
                  <Button variant="warning">Agregar</Button>
                </Card.Body>
              </Card>
            </Col>
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

