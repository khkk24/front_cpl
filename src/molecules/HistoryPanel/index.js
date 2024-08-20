import React from 'react';
import './styles.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const HistoryPanel = ({ history, showHistory, toggleHistory }) => {
  return (
    <Container fluid className={`history-panel ${showHistory ? 'show' : 'hide'}`}>
      <Row className="mb-3">
        <Col>
          <Button onClick={toggleHistory} variant="primary" className="toggle-history-btn">
            {showHistory ? 'Hide History' : 'Show History'}
          </Button>
        </Col>
      </Row>

      {showHistory && (
        <Row className="history-panel-content">
          <Col>
            {history.length > 0 ? (
              history.map((msg, index) => (
                <div key={index} className="history-item p-2 border-bottom">
                  {msg.title}
                </div>
              ))
            ) : (
              <p className="text-muted">No history available</p>
            )}
          </Col>
        </Row>
      )}

      {showHistory && (
        <Row className="mt-3">
          <Col className="text-right">
            <Button variant="outline-secondary" className="mr-2">
              <i className="pi pi-question-circle"></i>
            </Button>
            <Button variant="outline-danger">
              <i className="pi pi-sign-out"></i>
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};
