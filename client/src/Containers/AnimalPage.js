import MainPageNavBar from "./MainPageNavBar"
import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import "./card.css"
//fix the main nav bar here

export default function AnimalPage(){
    var [AnimalsArray, setAnimalsArray] = useState([]);

    useEffect((req, res) =>{
        axios.get("/api/auth/showAnimals").then((response) => {
            setAnimalsArray( response.data);
        });
    })

    return(
    <div class = "AnimalPage">

        <div className="AnimalsPage">
            <MainPageNavBar />
            <h1>Animals in our Zoo</h1>
        </div>
        {
           AnimalsArray.map((value, key) => {
            return<div className = "card">
                     <h2>{value.Animal_Name} </h2>
                     <p>{value.Species} | {value.Animal_Gender} | {value.Habitat} | {value.Animal_DOB}</p>
                </div>
        })}
    </div>
    )


}