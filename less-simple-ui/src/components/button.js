import React from "react";

const Button = (props)=> {
    const name = props.name;
    return (
        <button type="submit" className="btn"><h2>{name}</h2></button>
    )
}
export default Button;