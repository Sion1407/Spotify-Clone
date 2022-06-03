import React, { useState } from 'react'
import axios from 'axios'

export default function Addartists() {
    const [name, setName] = useState("")
    const [dob, setDOB] = useState("")
    const [bio, setBio] = useState("")

    function addArtist() {
        axios.post("http://localhost:8000/createArtist",{name:name,dob:dob,bio:bio}).then(()=>{
            console.log("Sucess");
        }).catch(()=>{
            console.log("Failed");
        })
    }

    return (
        <div className="container">
            <h1>Add an Artist</h1>

            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="name" id="inputName" placeholder="Name of the artist" onChange={(event) => {
                        setName(event.target.value);
                    }} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">D.O.B</label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" name="dob" id="dateofbirth" placeholder="dd/mm/yyyy" onChange={(event) => {
                        setDOB(event.target.value);
                    }} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Bio</label>
                <div className="col-sm-10">
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="bio" rows={3} defaultValue={""} onChange={(event) => {
                        setBio(event.target.value);
                    }} />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button className="btn btn-primary" onClick={addArtist}>Done</button>
                </div>
            </div>




        </div>
    )
}
