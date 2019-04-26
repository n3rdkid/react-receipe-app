import React from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes';
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
    fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`)
    const data=await api_call.json();
    if(data.error)
    {
      this.setState({recipes:Array(10).fill({recipe_id: "1",
      image_url:"https://picsum.photos/300/300",
      title:"Sorry API Max Call reached",
      publisher:"Saurav Adhikari"})
    })
    }
    else
    this.setState({recipes:data.recipes});
    console.log(this.state.recipes)
  }

  render(){
    return (
        <div className="container">
          <header className="App-header">
           <h1 className="App__title">Recipes Search</h1>  
           <Form getRecipes={this.getRecipes}/>
          </header>
        <div className="container">
          <Recipes recipes={this.state.recipes}/>
        </div>
        </div>
      );
    }
  }

export default App;
