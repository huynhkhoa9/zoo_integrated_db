import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import axios from "axios"

export default function UpdateEmployee() {

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

    function handleUpdate(event){
        event.preventDefault();
        axios.post("/api/auth/updateEmployee", {EmployeeId, EmployeeFirstName, EmployeeLastName, EmployeeDOB, EmployeeGender, EmployeeSalary,
            EmployeeDepartment, EmployeeContactInfo, EmployeeSSN, EmployeeSupervisorId, EmployeePassword})
            .then(response => {
                return response.data;
            })
    
            alert("Employee Information Updated!");
        }

    function handleDelete(event)
    {
        event.preventDefault();
        axios.post("/api/auth/deleteEmployee", {EmployeeId});
        alert("Employee Deleted!");
    }

    return(
        <div className="Employees">
            <EmployeeNavBar />
            <h1>Update Employee Information</h1>
            <form class="employee" id="employeesinfo" onSubmit={handleUpdate}>
                <div>
                <label>Employee ID - Required for update and delete</label>
                    <input type="text" placeholder="12345" id="employeeid" onChange={(e)=> setEmployeeId(e.target.value)}></input>
                </div>
                <div>
                <label>First Name</label>
                    <input type="text" placeholder="John" id="employeeFirstName" onChange={(e)=> setEmployeeFirstName(e.target.value)}></input>
                </div>
                <div>
                <label>Last Name</label>
                    <input type="text" placeholder="Snow" id="employeeLastName" onChange={(e)=> setEmployeeLastName(e.target.value)}></input>
                 </div>
                <div>
                <label>Date of Birth</label>
                    <input type="text" placeholder="12/31/2000" id="employeeDOB" onChange={(e)=> setEmployeeDOB(e.target.value)}></input>
                </div>
                <div>
                <label>Gender</label>
                <select id="employeeGender" onChange={(e)=> setEmployeeGender(e.target.value)}>
                        <option value="">Select Gender</option>  
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                </select>
                 </div>
                <div>
                <label>Salary</label>
                    <input type="text" placeholder="15.00" id="employeeSalary"  onChange={(e)=> setEmployeeSalary(e.target.value)}></input>
                </div>
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
                <label>Contact Information</label>
                    <input type="text" placeholder="713-000-0000" id="employeeContactInfo" onChange={(e)=> setEmployeeContactInfo(e.target.value)}></input>
                </div>
                <div>
                <label>Social Security Number</label>
                    <input type="text" placeholder="000-00-0000" id="employeeSSN" onChange={(e)=> setEmployeeSSN(e.target.value)}></input>
                </div>
                <div>
                <label>Supervisor ID</label>
                    <input type="text" placeholder="12345" id="employeeSupervisorId" onChange={(e)=> setEmployeeSupervisorId(e.target.value)}></input>
                </div>
                <div>
                <label>New Employee Password</label>
                    <input type="text" placeholder="Enter a Password" id="employeepassword" onChange={(e)=> setEmployeePassword(e.target.value)}></input>
                </div>
                <button type="submit">Update</button>
                <button onClick ={handleDelete}>Delete</button>
            </form>
        </div>
    )
}