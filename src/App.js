import React, { Component } from 'react';
import './App.css';
import AddItem from "./component/AddItem";
import ListItem from "./component/ListItem";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      inp : []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(val){
    this.setState({
      inp : [...this.state.inp ,val]
    })
  }

  handleClick(id){
    this.setState((prevState) =>({
      inp : prevState.inp.filter(items => items !== id)
    }))
  }

  render() {
    return (
      <div>
        <h1 className="author">Created By Bee Wijaya</h1>
        <div className="App">
          <div className="Title">
              <h1>TodoList App</h1>
              <hr />
          </div>
          <ListItem item={this.state.inp} clicked={this.handleClick}/>
          <AddItem inp={this.state.inp} handleSubmit={this.handleSubmit}/>
        </div>
        <h2 className="reference">Powered by ReactJS</h2>
      </div>
    );
  }
}

export default App;
