import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import axios from "axios"
import "./card.css"

export default function Employee(){
    var history = useHistory();
    
    const [EmployeeFirstName, setEmployeeFirstName] = useState("");
    const [EmployeeLastName, setEmployeeLastName] = useState("");
    const [EmployeeDOB, setEmployeeDOB] = useState("");
    const [EmployeeGender, setEmployeeGender] = useState("");
    const [EmployeeSalary, setEmployeeSalary] = useState("");
    const [EmployeeDepartment, setEmployeeDepartment] = useState("");
    const [EmployeeContactInfo, setEmployeeContactInfo] = useState("");
    const [EmployeeSSN, setEmployeeSSN] = useState("");
    const [EmployeeSupervisorId, setEmployeeSupervisorId] = useState("");
    const [EmployeeId, setEmployeeId] = useState("");
    const [EmployeePassword, setEmployeePassword] = useState("");
    const [EmployeesArray, setEmmployeesArray] = useState([]);
    
    function handleSubmit7(event){
        event.preventDefault();
        
        axios.post("/api/auth/employeeReport",{EmployeeDepartment, EmployeeSupervisorId}).then((response) => {
            setEmmployeesArray( response.data);
        });
    }

    return(
        <div className="Employees">
            <EmployeeNavBar />
            <h1>Enter Employee Information</h1>
            <form class="employee" id="employeesinfo" onSubmit={handleSubmit7}>
                <div>
                <label>Department</label>
                    <select id="department" onChange={(e)=> setEmployeeDepartment(e.target.value)}>
                        <option value="">Select Department</option>
                        <option value="Zoo Keeper">Zoo Keeper</option>
                        <option value="Restaraunt Staff">Restaraunt Staff</option>
                        <option value="Gift Shop Staff">Gift Shop Staff</option>
                        <option value="Food Stalls">Food Stalls</option>
                        <option value="Veterinarian">Veterinarian</option>
                        <option value="Registrar">Registrar</option>
                        <option value="Curator">Curator</option>
                        <option value="Maintenance">Maintnance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Visitor Services">Visitor Services</option>
                        <option value="Janitorial">Janitorial</option>
                        <option value="Membership Director">Membership Director</option>
                        <option value="Volunteer">Volunteer</option>
                    </select>
                </div>
                <div>
                <label>Supervisor ID</label>
                    <input type="text" placeholder="12345" id="employeeSupervisorId" onChange={(e)=> setEmployeeSupervisorId(e.target.value)}></input>
                </div>
                <button type="submit">Submit</button>
            </form>

            {EmployeesArray.map((value) =>{
                return <div class = "card">
                    <h2>{value.Employee_FirstName} | {value.Employee_LastName}</h2>
                    <h3>{value.Employee_Department}</h3>
                    <p> {value.Employee_DOB} | {value.Employee_Gender} | {value.Employee_Salary}
                    |{value.Employee_ContactInfo} | {value.Employee_SSN} | {value.Employee_SupervisorId} | {value.Employee_Id} | {value.Employee_Password}
                    </p>
                        </div>
                })
            }
        </div>
    )
}