import React, { Component } from 'react';
import UserForm from './components/UserForm'
import './App.css';




class App extends Component {
 constructor(props){
   super(props)
   this.state = { 
     showUserForm: false
    }

   this.handleCLick = this.handleCLick.bind(this)
  }
  handleCLick(){
    console.log("Clicked")
    this.setState({
      showUserForm:true
    })
  }
  render() { 
  return (
    <div className="App">
      
       <div className="intro-container"class="jumbotron">
          <h1 class="display-4">Welcome to Budgety</h1>
          <p class="lead">You have come to the right place! Our job is to help you achieve your financial goals</p>
          <hr class="my-4"/>
          <p>But first! In order for our team to provide the best advice, please click next to fill out the survey form.</p>
          <p class="lead">
          <button className="survey-button" style={{margin:'auto'}}class="btn btn-primary btn-lg" onClick={this.handleCLick}>Start Planning!</button>
          {this.state.showUserForm ? <UserForm/> : null}
          </p>
          
      </div>
    </div>
  );
}
}

export default App;
