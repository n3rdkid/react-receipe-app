import React from 'react';
import './Recipes.css';
const Recipes = (props)=>(
<div className="container">
<div className="row">
{
        props.recipes.map(recipe =>{
        return ( <div className="col-12 col-md-4" key={`${recipe.recipe_id}${Math.floor(Math.random()*(100+1)+1)}`}>
                 <div className="recipe___card card">  
                     <img className="recipe___image" src={recipe.image_url} alt={recipe.title+" image"}/>
              
                     <div className="recipe__text" >
                        <h5 className="recipe__title">{recipe.title}</h5>
                        <p className="recipe__subtitle">{recipe.publisher}</p>
                     </div>
                     <button className="recipe__button">
                         View Recipe
                     </button>
                 </div>
    </div>)})
}
</div>
</div>
)

export default Recipes;