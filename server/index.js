const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require('cors')
const multer = require('multer')
const path = require('path')
// const dateformat = require('dateformat')

app.use(express.urlencoded({extended:true}))

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

    db.query("INSERT INTO artists (Names,date_of_birth,bio) VALUES (?,DATE_FORMAT(?,'% %M %D %Y'),?)",[name,dob,bio] ,(err,result)=>{
        if(err){
            console.log(err);
            
        }
        else{
            console.log("Sucessfully added to DB");
            checkState = true
        }
    })

})

app.get('/getArtist',(req,res)=>{
    db.query("SELECT id,Names FROM artists",(err,result)=>{
        if (err) {
            console.log(err);
        }else{
            res.send(result)
            console.log("successfully received from DB");
        }
    })
})

app.get('/getArtistDetails',(req,res)=>{
    db.query("select a.id, a.Names,a.date_of_birth,GROUP_CONCAT(s.SongName) as Songs from artists a, songs s where s.artistName=a.Names group by a.id",(err,result)=>{
        if (err) {
            console.log(err);
        }else{
            res.send(result)
            console.log("successfully received from DB");
        }
    })
})

app.get('/getSongs',(req,res)=>{
    db.query("SELECT id,SongName,date_of_release,artistName FROM songs",(err,rslt)=>{
        if (err) {
            console.log(err);
        }else{
            res.send(rslt)
            console.log("successfully received from song DB");
        }
    })
})

// const storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,'Images')
//     },
//     filename: (req,file,cb)=>{
//         cb(null,Date.now()+path.extname(file.originalname)) 
//     }
// })

//  var uploadAvatar = multer({
//       storage: storage,
//       fileFilter: (req,file,cb)=>{
//           const fileTypes = /jpeg|jpg|png|gif/
//           const mimType = fileTypes.test(file.mimetype)
//           const extname = fileTypes.test(path.extname(file.originalname))

//           if(mimType && extname){
//               return cb(null,true)
//           }
//           cb('Give proper file name')
//       }
//     }).single('avatar')

app.post("/addSong",(req,res)=>{
    const songName = req.body.songName
    const dor = req.body.dor
    // const file = req.body.image
    const artists = req.body.artists
    // INSERT INTO xx_BLOB(ID,IMAGE) VALUES(1,LOAD_FILE('E:/Images/file'));
    db.query("INSERT INTO songs (SongName,date_of_release,artistName) VALUES (?,DATE_FORMAT(?,'% %M %D %Y'),?)",[songName,dor,artists] ,(err,result)=>{
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