import React from 'react';
import {Link} from 'react-router-dom';
const API_KEY= "3802bfaa34f96e8aefaecb983e61ca18";
class Recipe extends React.Component{
    state={
        activeRecipe:[]
    }
    componentDidMount= async ()=>{
            const title= this.props.location.state.recipe;
            const request = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
            const response= await request.json();
            this.setState({activeRecipe:response.recipes[0]})   
            console.log(response.recipes[0])       ;
    }
    render(){

        const recipe=this.state.activeRecipe;
        return ( 
        <div className="container">
        {
            this.state.activeRecipe.length!==0 &&
            <div className="row">
            <div className="card">
                <img  src={recipe.image_url} alt={recipe.title}/>
                <h3>{recipe.title} </h3>
                <h4>Publisher: <span>{recipe.publisher}</span></h4>
                <p>Website :<span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
                <button><Link to={'/'}>Go Home</Link></button>
            </div>
            </div>
        }
        </div>)
    }
}


export default Recipe;