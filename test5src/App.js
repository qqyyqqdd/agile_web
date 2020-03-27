import React, {Component, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoList from "./TodoList";

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="App">
                <TodoListHeader/>
                <TodoList />
            </div>
        );
    }
}

export default App;
