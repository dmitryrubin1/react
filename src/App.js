import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Contact from "./components/todo/todo";
import News from "./components/news/news";
import Home from "./components/home/home";
import {BrowserRouter, Route} from "react-router-dom/";



function App() {
    // debugger;
  return (
      <BrowserRouter>
        <div className="App">
            <Header/>
            <main>
                <Route path='/Todo' component={Contact}/>
                <Route path='/News' component={News}/>
                <Route path='/Home' component={Home}/>
            </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
