import React, { Component } from 'react';
import Deskripsi from './component/deskripsi';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
    }
  }

  setName = (e) => {
    let name = e.target.value
    this.setState({
      name : name
    })
    console.log(name)
  }
  render(){
      return (
        <div>
          <input onChange={this.setName}/>
          <h3>{this.state.name}</h3>
          <Deskripsi name={this.state.name}/>
        </div>
        );
      }
    }



export default App;
