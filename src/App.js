import './App.css';
import WrapperComp from './components/WrapperComponent';
import NavbarComp from './components/NavbarComponent';
import FormWrapperComp from './components/FormWrapperComponent';

/**
 * /////////////////////////////////////////////////////////////
 * ROOT APPLICATION
 * /////////////////////////////////////////////////////////////
 * @returns Content from all components to the root in index
 */
const App = () => {
  return (
    <div className="App">
      <WrapperComp>
        <NavbarComp />
        <FormWrapperComp />
      </WrapperComp>
    </div>
  );
}

export default App;
