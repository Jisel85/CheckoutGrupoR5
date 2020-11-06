import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
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
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
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
    </div>
  );
}

export default App;
