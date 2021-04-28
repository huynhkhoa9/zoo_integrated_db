import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import "./Revenue.css"
import axios from "axios"
import "./card.css"
export default function Revenue(){
    const [TicketSales, setTicketSales] = useState("");
    const [GiftShopSales, setGiftShopSales] = useState("");
    const [RestaurantSales, setRestaurantSales] = useState("");
    const [FoodStallSales, setFoodStallSales] = useState("");
    const [Date, setDate] = useState("");
    const [TotalSales, setTotalSales] = useState("");
    const [RevenueArray, setRevenueArray] = useState([]);
    const [BeginningDate, setBeginningDate] = useState("");
    const [EndDate, setEndDate] = useState("");

    function showRevenue(event)
    {
        event.preventDefault();

        axios.post("/api/auth/getRevenue").then((response) => {
            setRevenueArray( response.data);
            });
    }

    return(
        <div className="Revenue">
            <EmployeeNavBar/>
            <h1>Enter Date for Revenue</h1>
            <form class="revenue" id="revenueform" onSubmit={showRevenue}>
                <label>Beginning Date</label>
                    <input type="date" placeholder="yyyy/dd/mm" id="beginningdate" onChange={(e)=> setBeginningDate(e.target.value)}></input>
                <label>End Date</label>
                    <input type="date" placeholder="yyyy/dd/mm" id="enddate" onChange={(e)=> setEndDate(e.target.value)}></input>
                <button>Submit</button>
            </form>

            {RevenueArray.map((value) =>{
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