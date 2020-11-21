import React from 'react';
import logo from '../static/seguro1.jpg';
import imgrobo from '../static/segurorobo.jpg';
import imgaccident  from '../static/accident.jpg';
import mascotas  from '../static/mascotas.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/Recommended.scss';
import Footer from '../components/Footer';

function Recommended() {
  return (
    <>
    <Header />
    <div className="App">
      <Container>
        <h2 className="recommended-services">También te puede interesar</h2>
        <Row>
          <Col className="recommended-services_list">
            <Card className="services">
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Seguro de Auto todo riesgo</Card.Title>
                <Card.Text>
                El Seguro Todo Riesgo busca proteger tu patrimonio de daños propios o daños causados a terceros
                </Card.Text>
                <Button variant="warning">Agregar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="recommended-services_list">
            <Card className="services">
              <Card.Img variant="top" src={imgrobo} />
              <Card.Body>
                <Card.Title>Seguro robo</Card.Title>
                <Card.Text>
                indemnizar al asegurado por los daños sufridos a consecuencia de la desaparición
                </Card.Text>
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
                <Card.Title>Seguro Accidentes Personales</Card.Title>
                <Card.Text>
                Con el seguro de accidentes personales cuentas con el mejor apoyo en los momentos más difíciles, por eso queremos respaldarte si llegas a tener un accidente.
                </Card.Text>
                <Button variant="warning">Agregar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="recommended-services_list">
            <Card className="services">
              <Card.Img variant="top" src={mascotas} />
              <Card.Body>
                <Card.Title>Seguro mascotas</Card.Title>
                <Card.Text>
                Estar preparado es la mejor opción para proteger la vida de aquellos peluditos a los que tanto amamos.
                </Card.Text>
                <Button variant="warning">Agregar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <button type="button" class="btn btn-warning btn-lg">Finalizar Compra</button>
    </div>
    <Footer />
    </>
  );
}
           
export default Recommended;
