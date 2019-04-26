import React from 'react';
import './Form.css';
const Form = (props)=>{
    return (
        <form className="form" onSubmit={props.getRecipes}>
            <div className="form-group">
                <input className="form__label"  type="text" name="recipeName"/>
                <button className="button__search">Search</button>
            </div>
        </form>
    )
}

export default Form;
