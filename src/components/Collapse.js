import { useState } from "react";

export default function Collapse({title="Title", body="Body"}) {
    const [value, setValue] = useState("none");
    return ( 
    <div>
        <div
        onClick={function () {
            setValue(value ==="none" ? "block" : "none");
            //<=>
            //if (value === "none"){
            // setValue("block");
            //}else {
            // setValue("none");
            //}
            
        }}
        >
        {title}
        </div>
        <div style={{display: value}}>{body}</div>
    </div>
    ); 
}