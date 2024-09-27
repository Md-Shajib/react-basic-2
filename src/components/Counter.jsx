import { useState } from "react"
import '../css/button.css'


export default function Counter(){

    const [count, setcount] = useState(0);

    function handleIncreaseCount(){
        const newCount = count + 1;
        setcount(newCount);
    }

    function handleDecreaseCount(){
        if(count >= 2){
            const newCount = count - 1;
            setcount(newCount);
        }
    }


    return(
        <div className="counterCard">
            <h3>Count: {count}</h3>
            <button className="button" onClick={handleIncreaseCount}>Increase</button>
            <button className="button" onClick={handleDecreaseCount}>Decrease</button>
        </div>
    )
}