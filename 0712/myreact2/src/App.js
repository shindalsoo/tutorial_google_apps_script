import { Routes, Route, Link } from 'react-router-dom'
import { ThemeContext } from "./pages/ThemeContext";
import { UserContext } from "./pages/UserContext";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/Input';
import List from './pages/List';
import PropsSample from './pages/PropsSample';
import ContextPage from './pages/ContextPage';
// import { useState } from 'react';

function App() {
  // const [isDark, setIsDark] = useState(false);

  let isDark = false;

  const setIsDark = () => {
    isDark = !isDark;
  }

  const user = "호성";

  return (
    <div className='App'>

      <nav className='nav'>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/list">List</Link> | <Link to="props">PropsSample</Link> | <Link to="context">ContextPage</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/input' element={<Input />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/props' element={<PropsSample />}></Route>
        <Route path='/context' element={
          <UserContext.Provider value={user}>
            <ThemeContext.Provider value={{ isDark , setIsDark }}>
              <ContextPage />
            </ThemeContext.Provider>
          </UserContext.Provider>
        }>
        </Route>
      </Routes>

    </div>
  );
}

export default App;