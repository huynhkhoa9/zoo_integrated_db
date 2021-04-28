import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import axios from "axios"

function updateAnimal(AnimalId, Species, AnimalName, AnimalDOB, AnimalGender, Habitat){
    return axios.post("/api/auth/updateAnimal", {
        AnimalId, Species, AnimalDOB, AnimalGender, AnimalName, Habitat
    })
    .then(response => {
        return response.data;
    });
}

function deleteAnimal(AnimalId, Species, AnimalName, AnimalDOB, AnimalGender, Habitat){
    return axios.post("/api/auth/deleteAnimal", {
        AnimalId, Species, AnimalDOB, AnimalGender, AnimalName, Habitat
    })
    .then(response => {
        return response.data;
    });
}

export default function UpdateAnimals() {
    const [AnimalId, setAnimalId] = useState("");
    const [Species, setSpecies] = useState("");
    const [AnimalDOB, setAnimalDOB] = useState("");
    const [AnimalGender, setAnimalGender] = useState("");
    const [AnimalName, setAnimalName] = useState("");
    const [Habitat, setHabitat] = useState("");
    
    function hs(event){
        event.preventDefault();

        if(AnimalId.length === 0){
            alert("Must enter an Id to update the animal!")
        }
        else if(AnimalId.length !== 5){
            alert("Animal Id must be 5 numbers long!");
        }
        else{
            updateAnimal(AnimalId, Species, AnimalName, AnimalDOB, AnimalGender, Habitat);
            alert("Animal Information has been updated");
        }
    }

    function handleDelete(event)
    {
        event.preventDefault();
    }

    return(
        <div>
            <EmployeeNavBar/>
            <h1>Modify Animal Information</h1>
            <form class="updateform" id="updateinfo" onSubmit={hs}>
                <div>
                    <label>Animal Id - Id Needed to Modify Data</label>
                    <input type="text" placeholder="12345" id="animalid" onChange={(e)=> setAnimalId(e.target.value)}></input>
                </div>
                <div>
                <label>Animal Name</label>
                    <input type="text" placeholder="Animal Name" id="AnimalName" onChange={(e)=> setAnimalName(e.target.value)}></input>
                </div>
                <div>
                <label>Date of Birth</label>
                    <input type="date" placeholder="12/31/2000" id="AnimalDOB" onChange={(e)=> setAnimalDOB(e.target.value)}></input>
                </div>
                <div>
                <label>Species</label>
                    <select id="Species" onChange={(e)=> setSpecies(e.target.value)}>
                        <option value="">Select an Animal</option>  
                        <option value="Anteater">Anteater</option>
                        <option value="Arctic Fox">Arctic Fox</option>
                        <option value="Bald Eagle">Bald Eagle</option>
                        <option value="Beaver">Beaver</option>
                        <option value="Bison">Bison</option>
                        <option value="Camel">Camel</option>
                        <option value="Chimpanzee">Chimpanzee</option>
                        <option value="Giraffe">Giraffe</option>
                        <option value="Gorilla">Gorilla</option>
                        <option value="Grizzly Bear">Grizzly Bear</option>
                        <option value="Lemur">Lemur</option>
                        <option value="Lion">Lion</option>
                        <option value="Polar Bear">Polar Bear</option>
                        <option value="Prairie dog">Prairie dog</option>
                        <option value="Red Panda">Red Panda</option>
                        <option value="Rhinoceros">Rhinoceros</option>
                        <option value="Sloth">Sloth</option>
                        <option value="Tiger">Tiger</option>
                        <option value="Wolverine">Wolverine</option>
                        <option value="Zebra">Zebra</option>
                    </select>
                </div>
                <div>
                <label>Sex</label>
                    <select id="AnimalGender" onChange={(e)=> setAnimalGender(e.target.value)}>
                        <option value="">Select Gender</option>  
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                <label>Habitat</label>
                    <select id="habitat" onChange={(e)=> setHabitat(e.target.value)}>
                        <option value="">Select habitat</option>  
                        <option value="African Grasslands">African Grasslands</option>
                        <option value="American Grasslands">American Grasslands</option>
                        <option value="Arctic">Arctic</option>
                        <option value="Asian Forest">Asian Forest</option>
                        <option value="Great Apes of Harambee">Great Apes of Harambee</option>
                    </select>
                </div>
                    <button type="submit">Update</button>
                    <button onClick ={handleDelete}>Delete</button>
            </form>

        </div>
    )
}