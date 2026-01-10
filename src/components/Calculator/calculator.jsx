import {  useCallback, useState } from "react";

export function Calculator(){
    const [num, setNum] = useState(100);

    const handleButton1 = useCallback((event)=>{
        event.preventDefault();

        setNum(1000);
    }, []);

    const handleButton2 = useCallback((event)=>{
        const newNum = num + 10;
        setNum(newNum);

    },[num]);

    return(
        <>
        <button onClick={handleButton1}>Make 1000</button>
        <br />
        <button onClick={handleButton2}>Adds 10</button>
        <br />

        <p>Value of Num - {num}</p>
        </>
    )
}

    




// import { useCallback, useState } from "react";

// export function Calculator() {
//     const [num, setNum] = useState(100);

//     const handleButton1 = useCallback((event) => {
//         event.preventDefault();

//         setNum(1000);

//     },[]);

//     const handleButton2 = useCallback((event) => {
//         event.preventDefault();
//         const newNum = num + 10;
//         setNum(newNum);
//     },[num]);

//     return (
//             <>
//                 <button onClick = {handleButton1}>Make 1000</button>
//                 <br/>
//                 <button onClick={handleButton2}>Add 10</button>
//                 <br/>
//                 <p>Value of num  - {num}</p>
//             </>

//     )
// }

