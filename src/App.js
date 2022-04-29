// import logo from './logo.svg';
import './App.css';
import { animal } from './data.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header name = "Beth" />
      <Main animals = {animal} />
      <Footer email = "beth@gmail.com" />
    </div>
  );
}

export default App;
