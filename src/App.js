import React, { Component } from 'react';
import Deskripsi from './component/deskripsi';
import * as Helper from './helper';
import Loading from './helper/loading';
import * as Services from './services';
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      lagiNgetik: "",
      movies: []
    }
  }

  lagiNgetik = () => {
    this.setState({
      lagiNgetik : false
    })
  }
  setName = (e) => {
    let name = e.target.value
    this.setState({
      name : name,
      lagiNgetik: true
    })
    console.log(name)
  }

  componentDidMount(){
    this.setState({
      lagiNgetik: false
    })
    this.createRequest()
  }

  createRequest = async() => {
    let response = await Services.loadMOvies()
    this.setState({
      movies: response.data.movies
    })
  }

  componentDidUpdate(){
    console.log('component melakukan update')
  }

  render(){
    console.log(this.state.movies)
    if(this.state.lagiNgetik === true){
      return (
        <div>
          <input onChange={this.setName}/>
          <button onClick={this.lagiNgetik}>submit</button>
          <h3>{this.state.name}</h3>
          <Loading/>
        </div>
        );
    }
      return (
        <div>
          <input onChange={this.setName}/>
          <h3>{this.state.name}</h3>
          <Deskripsi name={Helper.lowerCase(this.state.name)}/>
        </div>
        );
      }
    }



export default App;
