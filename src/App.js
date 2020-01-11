import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Deskripsi from  './component/deskripsi';
import Input from './component/input';

class App extends Component {

  constructor(props){
    super(props)
  }

  render(){
      return (
        <div>
        <Deskripsi name="priyanto"/>
        <Input
            name = "pawit"
        />
        </div>
        );
      }
    }



export default App;
