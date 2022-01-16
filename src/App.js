import './App.css';
import React, { useState } from 'react';

import WrapperComp from './components/WrapperComponent';
import MyContext from './context/MyContext'

/**
 * /////////////////////////////////////////////////////////////
 * ROOT APPLICATION
 * /////////////////////////////////////////////////////////////
 * @returns Content from all components to the root in index
 */
const App = () => {
  // //// FIELDS ///////////////////////////////////////////////
  const [userName, setUserName] = useState("Valboa")

  return (
    <div className="App">
      <MyContext.Provider value={{ userName, setUserName }}>
        <WrapperComp />
      </MyContext.Provider>
    </div>
  );
}

export default App;
