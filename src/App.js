import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
// 1. store data 
    this.state = {
      firstName: "",
      lastName: ""
    }
    // otherway must include this
    // this.handleChange = this.handleChange.bind(this)
  }
// 2. manipulate data 
// context is already bound
// handleChange = (e) => {
//   this.setState({
//     firstName: e.target.value
//   })
// }
// another method but must include .bind() for reference
// handlechange(e) {
//   this.setState({
//     firstName: e.target.value
//   })
// }
// instead of writing 2 handleChange for firstName and lastName (target)use unique key name""
// wrap in brackets to use key
handleChange = (e) => {
  // console.log(e.target.name)
  this.setState({
    [e.target.name]: e.target.value
  })
}

// e not define e.preventDefault must pass e
handleSubmit = (e) => {
  // handles reloading page
  e.preventDefault()
  console.log(this.state.firstName, this.state.lastName)

  // this is where we send data 
  // post into your url server
  // mysql day 8 of 311

  axios.post('https://git.heroku.com/frozen-tor-01830.git', {
    // firstName: this.state.firstName,
    // lastName: this.state.lastName
    email: this.state.email,
    password: this.state.password
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  

  this.setState({
    firstName: "",
    lastName: "",

  })
}


render() {
  return (
    <div className="App">
      <header className="App-header">
        
      <p> Log In</p>
      {/* 3. visualize data */}
   {/* <form onSubmit={() => this.setState({})handleSubmit()}> */}

   {/* pass e in handleSubmit by chaning to anonymous function to call handleSubmit*/}
   {/* <form onSubmit={this.handleSubmit}> */}
   <form onSubmit={(e) => {this.handleSubmit(e)}}> 


   {/* // 1. store data - event listener */}
    <input name="email" type="text" value={this.state.email} onChange={(e) => {this.handleChange(e)}}></input>
    <input type="email"></input>
    <input name="password" type="text" value={this.state.password} onChange={(e) => {this.handleChange(e)}}></input>
    <input type="password"></input>
   </form>
      </header>
    </div>
  );
}
}

export default App;
