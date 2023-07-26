import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/Input';
import List from './pages/List';
import PropsSample from './pages/PropsSample';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/list">List</Link> | <Link to="props">PropsSample</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/input' element={<Input/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/props' element={<PropsSample/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
