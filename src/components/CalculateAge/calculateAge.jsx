import { useCallback, useState } from "react";
import { DisplayCompo } from "../DisplayCompo/DisplayCompo";
import { FormCompo } from "../FormCompo/FormCompo";

export function CalculateAge() {
    const [age, setAge] = useState();
    const [name, setName]  = useState();

    const handleAgeCalculation = useCallback((name, dob)=> {
    console.log("Name- ", name, "dob -- ", dob);
    if (name) {
        setName(name);
    }

    if (dob) {
        dob = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth()
        const dayDiff =today.getDate() - dob.getDate();

    if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
        age--
    }

     setAge(age);
    }



},[]);

return (
    <>
    <FormCompo onAgeCalculation={handleAgeCalculation}/>
    <DisplayCompo name={name} age={age}/>
    </>
);
}