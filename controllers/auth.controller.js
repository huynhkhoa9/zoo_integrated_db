const config = require("../auth/auth.config")
const mysql = require('mysql')

const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const e = require("express")

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'aajohs9larexbk.chdju4zwao3b.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'UHCougarsCS2021$',
    database: 'ebdb'
})

exports.signup = (req, res) => {
    let valid = true;
    let encryptedPass = bcrypt.hashSync(req.body.Password, 8);
    let query = "SELECT Customer_Username FROM customer WHERE Customer_Username = '" + req.body.Username + "'"
    let insert = "INSERT INTO customer (Customer_Email, Customer_Username, Customer_Password) VALUES ('" + req.body.Email +"', '" + req.body.Username + "', '" + encryptedPass + "');"

    pool.getConnection( async function(err, connection){
        if(err){
            return console.error('error:', + err.message);
        }
        console.log('Signup function called');

        valid = await new Promise(function(resolve, reject){
            setTimeout(function(){
                connection.query(query, function(err, result, fields){
                    if(err) throw err;
                    if(result.length != 0){
                        console.log("Duplicate username, denying Signup");
                        res.status(400).send({
                            message: "Username already in use!"
                        })
                        resolve(false);
                    }
                    else{
                        resolve(true);
                    }
                })
            }, 2000);
        })
        if(valid){
            connection.query(insert, function(err, result, fields){
                if(err) throw err;
                console.log("No duplicate username, signup success");
                res.status(200).send({
                    message: "Sign Up Successful"
                })
            })
        }
        connection.release();
    })
}

exports.checkEmail = (req, res) => {
    let valid = true;
    let query ="SELECT Customer_Email FROM customer WHERE Customer_Email = '" + req.body.Email + "'"
    let y = false;
    pool.getConnection( async function(err, connection){
        if(err){
            return console.error('error:', + err.message);
        }
        console.log('checkEmail function called');

        valid = await new Promise(function(resolve, reject){
            setTimeout(function(){
                connection.query(query, function(err, result, fields){
                    if(err) throw err;
                    if(result.length !== 0){
                        console.log("Email already exists");
                        res.status(400).send({
                            message: "Email already being used!"
                        })
                        resolve(false);
                    }
                    else{
                        resolve(true);
                    }
                })
            }, 2000);
        })
        if(!valid){
            connection.release();
            console.log("Returning True");
            y = true;
            return y;
        }
        else{
            connection.release();
            console.log("Returning false");
            return y;
        }
    })
}

exports.signin = (req, res) => {
    let valid = true;
    let query = "SELECT Customer_Username, Customer_Password FROM customer WHERE Customer_Username = '" + req.body.Username + "'"
    
    console.log('Login function called')
    
    pool.getConnection( async function(err, connection) {
        if(err){
            res.status(401).send({
                message: "Failed to connect to database"
            })
            return console.error('error:' + err.message)
        }    

        //must use await and promise to make the program wait for query to finish
        valid = await new Promise(function(resolve, reject) {
            setTimeout(function() {
                connection.query(query, function(err, result, fields){
                    if (err) throw err;

                    if(result.length != 0){  //if the username is in the DB
                        var passwordIsValid = bcrypt.compareSync(
                            req.body.Password,
                            result[0].Customer_Password  //here we can use result[0] since the query should only return one row
                        )
                            
                        if(!passwordIsValid) {
                            console.log("Invalid Password!")
                            res.status(401).send({
                                accessToken: null,
                                message: "Invalid Password!"
                            })
                        }
                        else{
                            console.log("Password was valid, login allowed")
                            var token = jwt.sign({ id: req.body.Username }, config.secret, {
                                expiresIn: 86400 // 24 hours
                            })
                            res.status(200).send({
                                Username: req.body.Username,
                                accessToken: token,
                            })
                            
                        }
                        resolve(true)
                    }
                    else{
                        resolve(false)
                    }
                })
                }, 2000);
        })

        if(!valid){     //username not in database
            console.log("Username not found. Denying login.")
            res.status(404).send({message: "User not found"})
        }
        connection.release();
    })
}

exports.employeesignin = (req, res) => {
    let valid = true;
    let query = "SELECT Employee_Id, Employee_Password FROM employee WHERE Employee_Id = '" + req.body.EmployeeID + "'"
    
    console.log('Employee Login function called')
    
    pool.getConnection( async function(err, connection) {
        if(err){
            res.status(401).send({
                message: "Failed to connect to database"
            })
            return console.error('error:' + err.message)
        }    

        //must use await and promise to make the program wait for query to finish
        valid = await new Promise(function(resolve, reject) {
            setTimeout(function() {
                connection.query(query, function(err, result, fields){
                    if (err) throw err;

                    if(result.length != 0){  //if the username is in the DB
                        if(req.body.EmployeePassword !== result[0].Employee_Password) {
                            console.log("Invalid Password!")
                            res.status(401).send({
                                accessToken: null,
                                message: "Invalid Password!"
                            })
                        }
                        else{
                            console.log("Password was valid, login allowed")
                            var token = jwt.sign({ id: req.body.EmployeeID }, config.secret, {
                                expiresIn: 86400 // 24 hours
                            })
                            res.status(200).send({
                                Username: req.body.EmployeeID,
                                accessToken: token,
                            })
                        }
                        resolve(true)
                    }
                    else{
                        resolve(false)
                    }
                })
                }, 2000);
        })

        if(!valid){     //username not in database
            console.log("ID not found. Denying login.")
            res.status(404).send({message: "User not found"})
        }
        connection.release();
    })
}

exports.addanimal = (req, res) => {
    var values = "INSERT INTO animal (Animal_Id, Species, Animal_Name, Animal_DOB, Animal_Gender, Habitat) VALUES ('" + req.body.AnimalId + "', '" + req.body.Species + "', '" + req.body.AnimalName + "', '" + req.body.AnimalDOB + "', '" + req.body.AnimalGender + "', '" + req.body.Habitat + "')"
    pool.getConnection(function(err, connection){
        if(err) throw err;
        connection.query(values, function(err, result, fields){
            if(err) throw err;
            console.log("Query to animal table was made")
        });
        connection.release();
    });
}

exports.addemployee = (req, res) => {
    var values = "INSERT INTO employee (Employee_FirstName, Employee_LastName, Employee_DOB, Employee_Gender, Employee_Salary, Employee_Department, Employee_ContactInfo, Employee_SSN, Employee_SupervisorId, Employee_Id, Employee_Password) VALUES ('" + req.body.EmployeeFirstName + "', '" + req.body.EmployeeLastName + "', '" + req.body.EmployeeDOB + "', '" + req.body.EmployeeGender + "', '" + req.body.EmployeeSalary + "', '" + req.body.EmployeeDepartment + "', '" + req.body.EmployeeContactInfo + "', '" + req.body.EmployeeSSN + "', '" + req.body.EmployeeSupervisorId + "', '" + req.body.EmployeeId + "', '" + req.body.EmployeePassword + "')"
    pool.getConnection(function(err, connection){
        if(err) throw err;
        connection.query(values, function(err, result, fields){
            if(err) throw err;
            console.log("Query to employee table was made")
        });
        connection.release();
    });
}

exports.addrevenue = (req, res) => {
    var values = "INSERT INTO daily_revenue (Sales_Date, Ticket_Sales, Restaurant_Sales, Gift_Shop_Sales, Food_Stall_Sales, Total_Sales) VALUES ('" + req.body.Date + "', '" + req.body.TicketSales + "', '" + req.body.RestaurantSales + "', '" + req.body.GiftShopSales + "',  '" + req.body.FoodStallSales + "', '" + req.body.TotalSales + "')"
    pool.getConnection(function(err, connection){
        if(err) throw err;
        connection.query(values, function(err, result, fields){
            if(err) throw err;
            console.log("Query to revenue table was made")
        });
        connection.release();
    });
}

exports.animalReport =  function(req, res){
    let listofAnimals = "SELECT * FROM animal";

    const nameFilter = "Animal_Name = '" + req.body.AnimalName + "'";
    const idFilter = "Animal_ID = '" + req.body.AnimalID + "'";
    const dobFilter = "Animal_DOB = '" + req.body.AnimalDOB + "'";
    const speciesFilter = "Species = '" + req.body.Species + "'";
    const habitatFilter = "Habitat = '" + req.body.AnimalHabitat + "'";
    const genderFilter = "Animal_Gender = '" + req.body.AnimalGender + "'";

    pool.getConnection(function(err, connection){
        connection.query(listofAnimals, function(err, result, fields){
            res.send(result);
        });
        connection.release();
    });
}

exports.showAnimals = function(req, res){
    const animalQuery =  "SELECT * FROM animal";

    pool.getConnection(function(err, connection){
        connection.query(animalQuery, function(err, result, fields){
            res.send(result);
        });
        connection.release();
    });
}

exports.getAnimals = (req, res) => {
    let valid = true;
    console.log("GetAnimals function called from backend");
    console.log("Id Query access");
    let query = "SELECT * FROM animals WHERE Animal_Id = '" + req.body.AnimalId + "'"
    pool.getConnection( async function(err, connection) {
        if(err){
            res.status(401).send({
                message: "Failed to connect to database"
            })
            return console.error('error:' + err.message)
        }    
    
        //must use await and promise to make the program wait for query to finish
        valid = await new Promise(function(resolve, reject) {
            setTimeout(function() {
                connection.query(query, function(err, result, fields){
                    if (err) throw err;
                    res.status(200).send({
                        data: result
                    })
                 })
                 }, 2000);
         })
        console.log("Animal Id was sent")
        connection.release();
        console.log("Id Query access ended");
        })
}

exports.checkIdEmployee = (req, res) => {
    let valid = true;
    console.log("Check Id function called!");
    var y = false;
    let query = "SELECT Employee_Id FROM employee WHERE Employee_Id = '" + req.body.EmployeeId + "'"

    pool.getConnection( async function(err, connection){
        if(err){
            res.status(401).send({
                message: "Failed to connect to database"
            })
            return console.error('error:' + err.message)
        }
        valid = await new Promise(function(resolve, reject){
            setTimeout(function(){
                connection.query(query, function(err, result, fields){
                    if(err) throw err;
                    if(result.length != 0){
                        //console.log("Duplicate Id, denying Signup");
                        y = true;
                        res.status(400).send({
                            message: "ID already in use!"
                        })
                        resolve(false);
                    }
                    else{
                        resolve(true);
                    }
                })
            }, 2000);
        })
        if(y === true){
            connection.release();
            //console.log("Returning True");
            return y;
        }
        else{
            connection.release();
            //console.log("Returning False");
            y = false;
            return y;
        }
    })
}

exports.checkIdAnimal = (req, res) => {
    let valid = true;
    console.log("Check Id function called for Animals!");
    var y = false;
    let query = "SELECT Animal_Id FROM animals WHERE Animal_Id = '" + req.body.AnimalId + "'"

    pool.getConnection( async function(err, connection){
        if(err){
            res.status(401).send({
                message: "Failed to connect to database"
            })
            return console.error('error:' + err.message)
        }
        valid = await new Promise(function(resolve, reject){
            setTimeout(function(){
                connection.query(query, function(err, result, fields){
                    if(err) throw err;
                    if(result.length != 0){
                        //console.log("Duplicate Id, denying Signup");
                        y = true;
                        res.status(400).send({
                            message: "ID already in use!"
                        })
                        resolve(false);
                    }
                    else{
                        resolve(true);
                    }
                })
            }, 2000);
        })
        if(y === true){
            connection.release();
            //console.log("Returning True");
            return y;
        }
        else{
            connection.release();
            //console.log("Returning False");
            y = false;
            return y;
        }
    })
}

exports.getRevenue = (req, res) =>{
    console.log("Call getRevenue");
    let valid = true;
    let query = "SELECT * FROM revenue WHERE Sales_Date BETWEEN '" + req.body.BeginningDate + "' AND '" + req.body.EndDate + "'"
    pool.getConnection( async function(err, connection){
        if(err) throw err;
        pool.query(query, function(err, result, fields){
            if(err) throw err;
            console.log(result);
        })
    });
    connection.release();
}

exports.updateAnimal = (req, res) =>{
    let query = "SELECT Animal_Id FROM animals WHERE Animal_Id = '" + req.body.AnimalId + "'"
    pool.getConnection( async function(err, connection){
        if(err) throw err;
         
        valid = await new Promise(function(resolve, reject) {
            setTimeout(function() {
                connection.query(query, function(err, result, fields){
                    if (err) throw err;

                    if(result.length != 0){  //if the username is in the DB
                        if(req.body.Species !== ""){
                            var query1;
                            query1 = "UPDATE animals SET Species ='" + req.body.Species + "' WHERE Animal_Id = '" + req.body.AnimalId + "'"
                            connection.query(query1, function(err,result){
                                if(err) throw err;
                            })
                        }
                        if(req.body.AnimalDOB.length !== 0){
                            var query2;
                            query2 = "UPDATE animals SET Animal_DOB ='" + req.body.AnimalDOB + "' WHERE Animal_Id = '" + req.body.AnimalId + "'"
                            connection.query(query2, function(err,result){
                                if(err) throw err;
                            })
                        }
                        if(req.body.AnimalGender !== ""){
                            var query3;
                            query3 = "UPDATE animals SET Animal_Gender ='" + req.body.AnimalGender + "' WHERE Animal_Id = '" + req.body.AnimalId + "'"
                            connection.query(query3, function(err,result){
                                if(err) throw err;
                            })
                        }
                        if(req.body.AnimalName !== ""){
                            var query4;
                            query4 = "UPDATE animals SET Animal_Name ='" + req.body.AnimalName + "' WHERE Animal_Id = '" + req.body.AnimalId + "'"
                            connection.query(query4, function(err,result){
                                if(err) throw err;
                            })
                        }
                        if(req.body.Habitat !== ""){
                            let query5
                            query5 = "UPDATE animals SET Habitat ='" + req.body.Habitat + "' WHERE Animal_Id = '" + req.body.AnimalId + "'"
                            connection.query(query5, function(err,result){
                                if(err) throw err;
                            })
                        }
                        resolve(true)
                    }
                    else{
                        resolve(false)
                    }
                })
                }, 2000);
        })
        connection.release();
    })
}