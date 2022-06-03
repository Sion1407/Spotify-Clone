import React, { useEffect, useState } from 'react'
import Multiselect from 'multiselect-react-dropdown'
import axios from 'axios'

export default function AddSong() {

    const [artists, setartists] = useState([]);
    // const [artistsName, setartistsName] = useState([]);
    const [songName, setsongName] = useState("")
    const [Dor, setDor] = useState("")
    const [image, setImage] = useState("")


    function addSong() {
        // setartists()
        axios.post("http://localhost:8000/addSong", { songName: songName, dor: Dor, image: image, artists: artists })
    }
    useEffect(()=>{
        const getArtistNames = async()=>{
            const aNames = []
            axios.get("http://localhost:8000/getArtist").then((resp) => {
                setartists(resp.data)
                // artists.forEach(element => {
                //     aNames.push(element.Names)
                // });
            })
            // setartistsName(aNames)
            // console.log(artistsName);
        }
        getArtistNames();
    },[])
        
        
    
    

    return (
        <div className='container'>
            <h1>Adding a new song</h1>

            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Song Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="songName" id="inputName" placeholder="Name of the Song" onChange={(event) => {
                        setsongName(event.target.value);
                    }} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Date of release</label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" name="dor" id="dateofbirth" placeholder="dd/mm/yyyy" onChange={(event) => {
                        setDor(event.target.value);
                    }} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Artwork</label>
                <div className="col-sm-10">
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={(event) => {
                        setImage(event.target.files[0]);
                    }} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Artist</label>
                <div className="col-sm-10">
                    
                        {/* <Multiselect
                        isObject={true}
                        onRemove={(event) => {
                            // console.log(event);
                        }}
                        onSelect={(event) => {
                            // console.log(event);
                        }}
                        options={artists.Names}
                        selectedValues={[]}
                        showCheckbox
                    /> */}
                        
                    
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button className="btn btn-primary" onClick={addSong} >Add Song</button>
                </div>
                {/* <button className="btn btn-primary" onClick={getArtistNames} >Show Artists</button> */}
            </div>
            
        </div>
    )
}
