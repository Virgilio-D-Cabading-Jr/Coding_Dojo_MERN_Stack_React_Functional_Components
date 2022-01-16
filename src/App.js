import { createContext } from 'react';
import './App.css';

import WrapperComp from './components/WrapperComponent';
import MyContext from './context/MyContext'

/**
 * /////////////////////////////////////////////////////////////
 * ROOT APPLICATION
 * /////////////////////////////////////////////////////////////
 * @returns Content from all components to the root in index
 */
const App = () => {

  return (
    <div className="App">
      <MyContext.Provider value={"Valboa"}>
        <WrapperComp />
      </MyContext.Provider>
    </div>
  );
}

export default App;
