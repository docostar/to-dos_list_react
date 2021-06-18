import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import { Footer } from './MyComponent/Footer';
import { Todos } from './MyComponent/Todos';


function App() {
  let myvar = 121;
  return (
    <>
        <Header/>
        <Todos/>
        <Footer/>
    </>
  );
}

export default App;
