const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require('cors')

app.use(express.json())
app.use(cors())
const db = mysql.createConnection({
    user: "root",
    host: 'localhost',
    password: 'root',
    database: 'spotify'
})

app.post("/createArtist",(req,res)=>{
    const name = req.body.name
    const dob = req.body.dob
    const bio = req.body.bio

    db.query('INSERT INTO artists (Names,date_of_birth,bio) VALUES (?,?,?)',[name,dob,bio] ,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Sucessfully added to DB");
        }
    })
})

app.get('/getArtist',(req,res)=>{
    db.query("SELECT Names FROM artists",(err,result)=>{
        if (err) {
            console.log(err);
        }else{
            res.send(result)
            console.log("successfully received from DB");
        }
    })
})

app.post("/addSong",(req,res)=>{
    const songName = req.body.songName
    const dob = req.body.dor
    const image = req.body.image
    const artists = req.body.artists

    db.query('INSERT INTO artists (SongName,date_of_release,artwork,artistName) VALUES (?,?,?,?)',[songName,dor,image,artists] ,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Sucessfully added to DB");
        }
    })
})

app.listen("8000", ()=>{
    console.log("Successfully started");
})