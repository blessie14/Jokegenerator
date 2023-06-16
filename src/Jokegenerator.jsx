import React, { useState } from "react";
import './Jokegenerator.css'
import react, {usState} from "react";



function Jokegenerator(){
    const [jokes, setJokes] = useState("")
    const [isloading, setLoading] = useState("true")

    const handlejoke = async()=>{
        const response = await fetch("https://api.chucknorris.io/jokes/random")
        const  jsonData= await response.json();
        console.log(jsonData);
        setJokes(jsonData.value)


        try{
            let a = 1;
            let b = "";
            let c = a+ b;
            console.log(c);
        }catch(error){

        }
    };

    
    return(
        <div className="joke">
            <h1>Random jokes Generator 😂😂</h1>
            <p> {jokes} </p>
            <button onClick={handlejoke}>click here</button>
        </div>
    )
}

export default Jokegenerator