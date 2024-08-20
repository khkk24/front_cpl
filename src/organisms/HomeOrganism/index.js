import React, { useCallback, useState } from 'react';
import './styles.css';
import { Container } from 'react-bootstrap';
import { TopBar } from '../../molecules/TopBar';
import { HistoryPanel } from '../../molecules/HistoryPanel';

export const HomeOrganism = () => {
  const [darkmode, setDarkMode] = useState(false);
  const [showHistory, setShowHistory] = useState(false); 
  // const [history, setHistory] = useState([]);
  const [history, setHistory] = useState([
        { id: 1, title: 'Conversa 1' },
        { id: 2, title: 'Conversa 2' },
        { id: 3, title: 'Conversa 3' }
    ]);
  const handleDarkMode = useCallback(() => {
        setDarkMode(prevDarkMode => !prevDarkMode);
        document.body.classList.toggle('dark');
  }, []);
  const toggleHistory = useCallback(() => {
    setShowHistory((prevShowHistory) => !prevShowHistory);
  }, []);

    return (
      <Container fluid>
        <TopBar
          darkmode={darkmode}
          handleDarkMode={handleDarkMode}
        />
        <HistoryPanel
          history={history }
          showHistory={showHistory }
          toggleHistory={toggleHistory}
        />
      </Container>
    
  );
}