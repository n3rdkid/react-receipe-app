import React from 'react';

const Form = (props)=>{
    return (
        <form onSubmit={props.getReceipe}>
            <input type="text" name="receipeName"/>
            <button>Search</button>
        </form>
    )
}

export default Form;
