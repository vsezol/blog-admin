import React, {useContext, useEffect} from 'react';
import Navbar from './components/Navbar';
import ThemeProvider from './components/ThemeProvider';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
