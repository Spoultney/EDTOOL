import React, { useState } from 'react';
import './App.css';
import Mainpage from './components/mainpage';
import System from './components/system';
import styles from './App.css'
import Menu from './components/nav';


function App() {
  const [showSystem, setShowSystem] = useState(false);
  const handleSystemClick = () => {
    setShowSystem(true)
  }
  return (
    <div className={styles.container}>
      <Mainpage />
      <Menu onSystemClick={handleSystemClick} />
      {showSystem && <System />}

    </div>
  );
}

export default App;
