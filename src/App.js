import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Count from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import Form from './components/Form'
import LoginForm from './components/LoginForm'
import Home from './components/home'

function App() {
  return (
    <div className="App">
        {/* <Greet name="Navreet" heroname="abc">
        <p>This is children prop </p></Greet>
        <Greet name="Deep" heroname="ert"></Greet>
        <Greet name="Arsh"  heroname="dfg"></Greet> */}
        {/* <LoginForm></LoginForm> */}
        <Home></Home>
        {/* <Form/>
        <ClassClick/>
        <Count/> */}
        {/* <PostList/> */}
    </div>
  );
}

export default App;
