import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import "./Revenue.css"
import axios from "axios"

export default function Revenue(){
    const [TicketSales, setTicketSales] = useState("");
    const [GiftShopSales, setGiftShopSales] = useState("");
    const [RestaurantSales, setRestaurantSales] = useState("");
    const [FoodStallSales, setFoodStallSales] = useState("");
    const [Date, setDate] = useState("");
    const [TotalSales, setTotalSales] = useState("");

    const [BeginningDate, setBeginningDate] = useState("");
    const [EndDate, setEndDate] = useState("");

    return(
        <div className="Revenue">
            <EmployeeNavBar/>
            <h1>Enter Date for Revenue</h1>
            <form class="revenue" id="revenueform">
                <label>Beginning Date</label>
                    <input type="date" placeholder="yyyy/dd/mm" id="beginningdate" onChange={(e)=> setBeginningDate(e.target.value)}></input>
                <label>End Date</label>
                    <input type="date" placeholder="yyyy/dd/mm" id="enddate" onChange={(e)=> setEndDate(e.target.value)}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}