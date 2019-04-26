import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {

  getReceipe=(event)=>{
    event.preventDefault();
    const receipeName = event.target.elements.receipeName.value;
    console.log(receipeName);
  }

  render(){
    return (
        <div className="App">
          <header className="App-header">
          <h1>Receipe Search</h1>
          </header>
          <Form getReceipe={this.getReceipe}/>
        </div>
      );
    }
  }

export default App;
