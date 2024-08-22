import React, { useState } from 'react';
import './styles.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const NameLogin = () => {
  
  const [login, setLogin] = useState('');

    return (
      <Container fluid className='form-group'>
         {/* <Row className="justify-content-center">  */}
         {/* <Col  xs={12} sm={8} md={6} lg={4} className="input-container"> */}
         <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                type="text" 
                id="username" 
                name="username" 
                placeholder='Login (Ex: E00000):' 
                required 
              />
          </div>
          {/* </Col>
          </Row> */}
      </Container>
    
  );
}