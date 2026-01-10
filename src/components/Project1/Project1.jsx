import {useState} from "react";
export function Project1(){
    const [ num1, setNum1 ] = useState("");
    const [ num2, setNum2 ] = useState("");
    const [ result, setResult] = useState(null)
    
    const handleAdd = () => {
        setResult (Number (num1) + Number (num2) );
    }

    const handleSubstract = () => {
        setResult (Number (num1) - Number (num2) );
    }

    const handleMultiply = () => {
        setResult (Number (num1) * Number (num2));
    }

    const handleDivision = () => {
        setResult (Number (num1) / Number (num2));
    }

    return (

    <div>
        <input type="text"
        placeholder="Enter a value"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        />

        <input type="text" 
        placeholder="Enter another value" 
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        />

        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubstract}>Substract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivision}>divide</button>

        <h3>result: {result}</h3>

    </div>
    );
}
export default Project1;