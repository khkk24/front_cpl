import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import { HomeOrganism } from '../../organisms/HomeOrganism';

export const HomeTemplate = () => {
    return (
      <div className="mt-5 pt-4 fluid">
        <Container fluid className="fluid">
         
           
              <HomeOrganism />
           
         
        </Container>
        
      </div>
    
  );
}