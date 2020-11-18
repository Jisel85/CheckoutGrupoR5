import React from 'react';
import logo from './seguro1.jpg';
import imgrobo from './segurorobo.jpg';
import imgaccident  from './accident.jpg';
import mascotas  from './mascotas.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <div className="App">
      <p className="recommended-services">También te puede interesar</p>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title>Seguro de Auto todo riesgo</Card.Title>
                <Card.Text>
                El Seguro Todo Riesgo busca proteger tu patrimonio de daños propios o daños causados a terceros
                </Card.Text>
                <Button variant="primary">Agregar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={imgrobo} />
              <Card.Body>
                <Card.Title>Seguro robo</Card.Title>
                <Card.Text>
                indemnizar al asegurado por los daños sufridos a consecuencia de la desaparición
                </Card.Text>
                <Button variant="primary">Agregar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
        <Container>
        <Row>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={imgaccident} />
              <Card.Body>
                <Card.Title>Seguro Accidentes Personales</Card.Title>
                <Card.Text>
                Con el seguro de accidentes personales cuentas con el mejor apoyo en los momentos más difíciles, por eso queremos respaldarte si llegas a tener un accidente.
                </Card.Text>
                <Button variant="primary">Agregar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={mascotas} />
              <Card.Body>
                <Card.Title>Seguro mascotas</Card.Title>
                <Card.Text>
                Estar preparado es la mejor opción para proteger la vida de aquellos peluditos a los que tanto amamos.
                </Card.Text>
                <Button variant="primary">Agregar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <button type="button" class="finish">Finalizar Compra</button>
    </div>

    <Footer />
    </>
  );
}
           
export default App;
