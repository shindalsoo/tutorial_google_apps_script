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
import ReducerSimple from './pages/ReducerSimple';
import Attendance from './pages/Attendance';
import ReduxSample1 from './pages/ReduxSample1';
import ReduxSample2 from './pages/ReduxSample2';
// import { useState } from 'react';

function App() {
  // const [isDark, setIsDark] = useState(false);

  const darkTheme = {
    isDark: false,
    setIsDark: function () {
      return this.isDark = !this.isDark;
    },
  };

  const user = "호성";

  return (
    <div className='App'>

      <nav className='nav'>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/list">List</Link> | <Link to="props">PropsSample</Link> | <Link to="contextPage">ContextPage</Link> | <Link to="/reducerSimple">ReducerSimple</Link> | <Link to="/attendance">Attendance</Link> | <Link to="/reduxSample1">ReduxSample1</Link> | <Link to="/reduxSample2">ReduxSample2</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/input' element={<Input />}/>
        <Route path='/list' element={<List />}/>
        <Route path='/props' element={<PropsSample />}/>
        <Route path='/contextPage' element={
          <UserContext.Provider value={user}>
            <ThemeContext.Provider value={{ darkTheme }}>
              <ContextPage />
            </ThemeContext.Provider>
          </UserContext.Provider>
        }>
        </Route>
        <Route path='/reducerSimple' element={<ReducerSimple />}/>
        <Route path='/attendance' element={<Attendance />}/>
        <Route path='/reduxSample1' element={<ReduxSample1 />}/>
        <Route path='/reduxSample2' element={<ReduxSample2 />}/>
      </Routes>

    </div>
  );
}

export default App;