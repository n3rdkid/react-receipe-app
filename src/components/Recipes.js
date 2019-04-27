import React from 'react';
import './Recipes.css';
const Recipes = (props)=>(
<div className="container">
<div className="row">
{
        props.recipes.map(recipe =>{
        return ( 
            <div className="recipe___card col-12 col-md-3">
                 <div className=" card" key={`${recipe.recipe_id}${Math.floor(Math.random()*(100+1)+1)}`}>
                     <img className="recipe___image card-img-top" src={recipe.image_url} alt={recipe.title+" image"}/>
              
                     <div className="recipe__text card-body" >
                        <h5 className="recipe__title card-title">{recipe.title}</h5>
                        <p className="recipe__subtitle card-text">{recipe.publisher}</p>
                        <button className="recipe__button">
                         View Recipe
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