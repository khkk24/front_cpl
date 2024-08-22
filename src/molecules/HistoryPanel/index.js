// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';

// export const HistoryPanel = ({ history, showHistory, toggleHistory }) => {
//   return (
//     <Container fluid className={`history-panel ${showHistory ? 'show' : 'hide'}`}>
//       <Row>
//         <Col>
//           <Button onClick={toggleHistory} variant="primary" className="toggle-history-btn">
//             {showHistory ? 'Hide History' : 'Show History'}
//           </Button>
//         </Col>
//       </Row>

//       {showHistory && (
//         <Row className="history-panel-content mt-3">
//           <Col>
//             {history.length > 0 ? (
//               history.map((msg, index) => (
//                 <div key={index} className="history-item p-2 border-bottom">
//                   {msg.title}
//                 </div>
//               ))
//             ) : (
//               <p className="text-muted">No history available</p>
//             )}
//           </Col>
//         </Row>
//       )}
//     </Container>
//   );
// };


 // <Container fluid className={`history-panel ${showHistory ? 'show' : 'hide'}`}>
    //   <Row>
    //     <Col xs={12} className="d-flex justify-content-between align-items-center">
    //       <Button
    //         onClick={toggleHistory}
    //         variant="primary"
    //         className="toggle-history-btn">
    //         {showHistory ? 'Hide History' : 'Show History'}
    //       </Button>
    //       <div className="botaoSair">
    //         <Button variant="outline-secondary" className="botaoIcone2">
    //           <i className="pi pi-question-circle"></i>
    //         </Button>
    //         <Button variant="outline-secondary" className="botaoIcone2">
    //           <i className="pi pi-sign-out"></i>
    //         </Button>
    //       </div>
    //     </Col>
    //   </Row>

    //   {showHistory && (
    //     <Row className="history-panel-content mt-3">
    //       <Col>
    //         {history.length > 0 ? (
    //           history.map((msg, index) => (
    //             <div key={index} className="history-item p-2 border-bottom">
    //               {msg.title}
    //             </div>
    //           ))
    //         ) : (
    //           <p className="text-muted">No history available</p>
    //         )}
    //       </Col>
    //     </Row>
    //   )}
    // </Container>
    // <Container fluid className=''>
import React from 'react';
import { Container, ListGroup, Row, Col, Button } from 'react-bootstrap';

export const HistoryPanel = ({ history, showHistory, toggleHistory }) => {
  return (
    // <Container fluid >
    //   {showHistory && (
    //    <Row className='history-panel'>
    //       <ListGroup>
    //         {history.map((msg, index) => (
    //           <ListGroup.Item key={index} className="history-item">
    //             {msg.title}
    //           </ListGroup.Item>
    //         ))}
    //       </ListGroup>
    //       <Row className='mt-3'>
    //         <Col xs="auto" className='botaoSair'>
    //           <Button variant="primary" className='me-2'>
    //             <i className='pi pi-question-circle'></i>
    //           </Button>
    //           <Button variant="danger">
    //             <i className='pi pi-sign-out'></i>
    //           </Button>
    //         </Col>
    //       </Row>
    //   </Row>
    //   )}
    // </Container>
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



