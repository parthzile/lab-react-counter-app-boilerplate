import { useState } from "react";

function Counter(){

    const [num, setNum] = useState(0)

    function countInc(){
        setNum(num + 1)
    }

    function countDec(){
        setNum(num - 1)
    }

    function countReset(){
        setNum(0)
    }
    return(
        <div>
            <h1>COUNTER APP</h1>
            <p>{`${num}`}</p>
            <div>
                <button onClick={countInc}> + </button>
                <button onClick={countDec}> - </button>
                <button onClick={countReset}> Reset </button>
            </div>
        </div>
    )
}

export default Counter