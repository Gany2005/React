import { useState, useCallback  } from "react";
import "./FormCompo.css"

export function FormCompo(props){
    const { onAgeCalculation }= props ;

    const handleSubmit = useCallback((event)=>{
        event.preventDefault();
        const name = document.getElementById("name").value;
        const date = document.getElementById("dob").value;

        if(name && date){
            onAgeCalculation(name,date);
        }
        
    },
    [onAgeCalculation]
);

    return(
        <div className="form-container">
            <h2>User Information Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-submit">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"required />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">
                        Date of Birth :
                    </label>
                    <input type="date" id="dob"required />
                    <button type="submit" className="submit-button">
                        submit
                    </button>
                
                </div>
            </form>
        </div>
    )
}