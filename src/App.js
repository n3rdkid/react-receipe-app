import React from 'react';
import Form from './components/Form';
import './App.css';

const API_KEY= "3802bfaa34f96e8aefaecb983e61ca18";
class App extends React.Component {
  state={
    recipes:[]
  }
   getRecipes= async (event)=>{
    event.preventDefault();
    const recipeName = event.target.elements.recipeName.value;
    const api_call = await 
    fetch(`https://www.food2fork.com/api/search?key=${API_KEY}`)
    const data=await api_call.json();
    this.setState({recipes:data.recipes});
    console.log(this.state.recipes)
  }

  render(){
    return (
        <div className="App">
          <header className="App-header">
          <h1>Recipes Search</h1>
          </header>
          <Form getRecipes={this.getRecipes}/>
          {
            this.state.recipes.map(recipe=> <p key={recipe.id}>{recipe.title}</p>)
          }
        </div>
      );
    }
  }

export default App;
