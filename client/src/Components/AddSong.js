import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function AddSong() {

    const [artists, setartists] = useState([]);
    const [artistsName, setartistsName] = useState([]);
    const [songName, setsongName] = useState("")
    const [Dor, setDor] = useState("")
    // const [image, setImage] = useState("")


    function addSong() {
        axios.post("http://localhost:8000/addSong", { songName: songName, dor: Dor, artists: artistsName })
    }

    useEffect(()=>{
        const getArtistNames = async()=>{
            axios.get("http://localhost:8000/getArtist").then((resp) => {
                setartists(resp.data)
            })
        }
        getArtistNames();
    },[])

    return (
        <div className='container'>
            <h1>Adding a new song</h1>
            <form encType='multipart/form-data'>
            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Song Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="songName" id="inputName" required placeholder="Name of the Song" onChange={(event) => {
                        setsongName(event.target.value);
                    }} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Date of release</label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" name="dor" id="dateofbirth" required placeholder="dd/mm/yyyy" onChange={(event) => {
                        setDor(event.target.value);
                    }} />
                </div>
            </div>
            {/* <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Artwork</label>
                <div className="col-sm-10">
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"  onChange={(event) => {
                        setImage(event.target.files[0].name);
                    }} />
                </div>
            </div> */}
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Artist</label>
                <div className="col-sm-10">
                    <select multiple="multiple" data-style="bg-white rounded-pill px-4 py-3 shadow-sm " required onChange={(event) => {
                        setartistsName(event.target.value)
                    }}>
                        {
                            artists.map(artist=>(
                                <option key={artist.id}>{artist.Names}</option>
                            )
                            )
                        }
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <Link to="/" className="btn btn-primary" onClick={addSong}>Add Song</Link>
                </div>
                <Link to="/artist" className="btn btn-primary">Add Artists</Link>
            </div>
            </form>
        </div>
    )
}
