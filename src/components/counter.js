import { useState } from "react";
import Button from "./AwesomeButton";



export default function Counter(){
    //const result = useState(0);
    //let count = result[0];
    //let setCount = result[1];
    const [count, setCount] = useState(0);
    return(
        <div>
            <Button label="-" 
            variant="rounded"
            onClick={function() {
                setCount(count -1);
            }}
        />
        {count}
        <Button
            label="+" 
            variant="rounded"
            onClick={function () {
                setCount(count +1);
            }}
        />   
        </div>
    );
}