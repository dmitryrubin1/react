import React from 'react';
import Header from './components/header/header';
import './App.scss';
import Todo from "./components/todo/todo";
import Tours from "./components/tours/Tours"
import {BrowserRouter, Route} from "react-router-dom/";
import CreateTour from "./components/tours/create-tour/Create-tour";
import NewTodo from "./components/newTodo/NewTodo"

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header/>
            <main>
                <Route path='/New-todo' component={NewTodo}/>
                <Route path='/Tours' component={Tours}/>
                <Route path='/Todo' component={Todo}/>
                <Route path='/create-tour' component={CreateTour}/>
            </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
