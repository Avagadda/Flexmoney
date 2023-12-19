
const express = require("express")
const parser = require("body-parser");
const connection = require('./connection.js');
// const { Connection } = require("mongoose");
app = express();

//Used to recieve the data from the form 
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

//Create a route for registration page
app.get("/",(req ,res)=>{
    res.sendFile(__dirname + '/register.html');
})

//Getting the data and storing to the DB

app.post("/",(req, res) => {
    //console.log("reqest recieved");
    //console.log(req.body);
    var name = req.body.name;
    var phoneno = req.body.phoneno;
    var age = req.body.age;
    var batch = req.body.batch;

    //Establishing the connection to the DB
    connection.connect((err) => {
        if(err) throw err;
        else{
            connection.query('SELECT * FROM participants WHERE phoneno = ?',[phoneno], (error , resutlt)=> {
                if(error) throw error;
                //check if the phone number already exits in the DB
                if(resutlt.length > 0) {
                    var updateQuery = 'UPDATE  participants SET name = ? , phoneno = ? ,  age = ? ,batch = ?, feeStatus = ? WHERE phoneno = ?';
                    connection.query(updateQuery, [name,phoneno, age , batch , 'True'], (upError) => {
                        if(upError) throw upError;
                        else{
                            console.log("Data updated successfully");
                            // res.send("Resgistration succesfull");
                            res.sendFile(__dirname + '/success.html');

                        }
                    })
                }
                //If the user does not exits insert the fresh data in to DB
                else{
                    var sqlInsert = 'INSERT INTO participants (name,phoneno, age , batch , feeStatus) VALUES (?, ?, ?, ?,?)';
                    connection.query(sqlInsert, [name ,  phoneno ,age , batch , 'True'] , (insError) => {
                        if(insError) throw insError;
                        else{
                            console.log("Data inserted successfully");
                            res.sendFile(__dirname + '/success.html');
                            // res.send("Registration Successfull");
                        }
                    })
                }
             })
        }
    })
})

app.listen(5000)