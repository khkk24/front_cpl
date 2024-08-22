import logo from './logo.svg';
import './App.css';
import AppRouter from '../src/routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className='home-container'>
      <AppRouter />
    </Container>
  );
}

export default App;
