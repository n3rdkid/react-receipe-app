import React from 'react';
import {Link} from 'react-router-dom';
import './Recipes.css';
const Recipes = (props)=>(
<div className="container">
<div className="row">
{
        props.recipes.map(recipe =>{
        return ( 
            <div className="recipe___card col-12 col-sm-6 col-md-4">
                 <div className="card" key={`${recipe.recipe_id}${Math.floor(Math.random()*(100+1)+1)}`}>
                     <img className="recipe___image card-img-top" src={recipe.image_url} alt={recipe.title+" image"}/>
              
                     <div className="recipe__text card-body" >
                        <h5 className="recipe__title card-title">{ recipe.title.length < 20 ? `${recipe.title}`:`${recipe.title.substring(0,20)}...`}</h5>
                        <p className="recipe__subtitle card-text">{recipe.publisher}</p>
                        <button className="recipe__button">
                        <Link to={{pathname:`/recipe/${recipe.recipe_id}`,
                        state:{recipe:recipe.title}
                        }}> View Recipe </Link>
                     </button>
                     </div>
                
                 </div>
                 </div>
 )})
}
</div>
</div>
)

export default Recipes;