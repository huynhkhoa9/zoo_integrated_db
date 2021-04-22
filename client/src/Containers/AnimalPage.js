import EmployeeNavBar from "./EmployeeNavBar"
import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import "./card.css"


//fix the main nav bar here

export default function AnimalPage(){
    var animalName = "Elephant"
    var animalDescription = "Big boy"

    return(
    <div class = "AnimalPage">

        <div className="AnimalsPage">
            <EmployeeNavBar />
            <h1>Animals in our Zoo</h1>
        </div>

        <div className = "card">
            <h1><var>{animalName}</var></h1>
            <p><var>{animalDescription}</var></p>
        </div>

    </div>
    )


}