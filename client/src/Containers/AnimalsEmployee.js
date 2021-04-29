import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import axios from "axios"
import "./card.css"

export default function Animals(){
    var history = useHistory();
    const [AnimalId, setAnimalId] = useState("");
    const [Species, setSpecies] = useState("");
    const [AnimalDOB, setAnimalDOB] = useState("");
    const [AnimalGender, setAnimalGender] = useState("");
    const [AnimalName, setAnimalName] = useState("");
    const [Habitat, setHabitat] = useState("");
    var [AnimalsArray, setAnimalsArray] = useState([]);

    function getAnimals(Species, Habitat){
        return axios.post("/api/auth/animalReport", {AnimalId, Species, AnimalName, AnimalDOB, AnimalGender, Habitat}).then((response) => {
            setAnimalsArray( response.data);
        });
    }
    
    function handleSubmit6(event){
        event.preventDefault();
        getAnimals(Species, Habitat)
    }



    return(
        <div className="Animals">
            <EmployeeNavBar />
            <h1>Enter the Animal Information for Report</h1>
            <form class="animals" id="animalsform" onSubmit={handleSubmit6}>
                <label>Species</label>
                    <select id="Animalspecies" onChange={(e)=> setSpecies(e.target.value)}>
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
                <label>Habitat</label>
                    <select id="habitat" onChange={(e)=> setHabitat(e.target.value)}>
                        <option value="">Select Habitat</option>  
                        <option value="African Grasslands">African Grasslands</option>
                        <option value="American Grasslands">American Grasslands</option>
                        <option value="Arctic">Arctic</option>
                        <option value="Asian Forest">Asian Forest</option>
                        <option value="Great Apes of Harambee">Great Apes of Harambee</option>
                    </select>
                <button type="submit">Submit</button>
            </form>
            {AnimalsArray.map((value, key) => {
                return <div class = "card">
                <h2>{value.Animal_Name} </h2>
                <h3>{value.Species} </h3>
                <p>{value.Animal_Gender} | {value.Habitat} | {value.Animal_DOB}</p>
        </div>

            })}
            
        </div>
    )
}