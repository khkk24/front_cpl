
import React from 'react';
import { Container, ListGroup, Row, Col, Button } from 'react-bootstrap';
import './styles.css';

export const HistoryPanel = ({ history, showHistory, toggleHistory }) => {
  return (

    <Container fluid className={`history-panel ${showHistory ? 'd-block' : 'd-none'}`}>
      {showHistory && (
        <Container fluid className={`history-panel ${showHistory ? 'd-block' : 'd-none'}`}>
          <ListGroup>
            {history.map((msg, index) => (
              <ListGroup.Item key={index} className="history-item">
                {msg.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Col className='mt-3'>
            <Col xs="auto" className='botaoSair'>
              <Button variant="secondary" className='me-2'>
                <i className='pi pi-question-circle'></i>
              </Button>
            </Col>
            <Col xs="auto" className='botaoSair'>
              <Button variant="danger">
                <i className='pi pi-sign-out'></i>
              </Button>
            </Col>
          </Col>
        </Container>
      )}
    </Container>
    
  );
};



