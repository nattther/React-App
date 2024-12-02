import { useState } from "react";

function Counter(){
    const [counter,setCounter] = useState(0);


    return(<>
    <p>
        {counter}
    </p>
    <button> Increment Counter </button>
    <button> Decrement Counter </button>
    </>);
}

export default Counter