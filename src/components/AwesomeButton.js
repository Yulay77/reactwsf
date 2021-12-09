import React from "react";

function Button({
    
    backgroundColor = "white",
    onClick= function() {
        alert("Button Clicked!");
    },
    label = "Click me!",
    variant = "squared",
    }) {
    
    const buttonStyle = {
        backgroundColor,
        color: "black",
        borderRadius: variant ==="squared" ? 0 : "50%",
    };
    return <button 
    onClick={onClick}
    style={buttonStyle}>
        {label}
    </button>;
//React.createElement("button" , null, "Button");

}


export default Button;

    