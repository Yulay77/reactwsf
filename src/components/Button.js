function Button(props) {
    const backgroundColor = props.backgroundColor || "white";
    const onClick = props.onClick ||
    function () {
        alert("Button clicked!");
    }
    const label = props.label || "Click me!";

    const buttonStyle = {
        backgroundColor,
        color: "white",
    };
    return <button 
    onClick={onClick}
    style={buttonStyle}>
        {label}
    </button>;
//React.createElement("button" , null, "Button");

}


export default Button;

    