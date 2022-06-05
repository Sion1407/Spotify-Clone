import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import axios from 'axios'
// import Rate from './Rate'

export default function Home() {
  const [songName, setsongName] = useState([])
  const [artists, setartists] = useState([])

  useEffect(() => {
    const getSongNames = async () => {
      axios.get("http://localhost:8000/getSongs").then((resp) => {
        setsongName(resp.data)
      })
    }
    const getArtistNames = async()=>{
      // const aNames = []
      axios.get("http://localhost:8000/getArtistDetails").then((resp) => {
          setartists(resp.data)
      })
  }
  getSongNames();
  getArtistNames();
  }, [])

  return (
    <div className='container'>
      <div>
        <h1>Top 10 Songs</h1>
        <table>
          <tbody><tr>
            <th>Song</th>
            <th>Date of Release</th>
            <th>Artist</th>
            <th>Rating</th>
          </tr>
          </tbody>
          {
          songName.map(song=> {
          return (
            <tr key={song.id}>
              <td>{song.SongName}</td>
              <td>{song.date_of_release}</td>
              <td>{song.artistName}</td>
            </tr>
          )
        })}
          </table>

        {/* <Rate rating={rating} onRating={(rate) => setRating(rate)} /> */}
      </div>
      <div>
        <h1>Top 10 Artist</h1>
        <table>
          <tbody><tr>
            <th>Artists</th>
            <th>Date of Birth</th>
            <th>Songs</th>
          </tr>
          </tbody>
          {artists.map(artist=> {
          return (
            <tr key={artist.id}>
              <td>{artist.Names}</td>
              <td>{artist.date_of_birth}</td>
              <td>{artist.Songs}</td>
            </tr>
          )
        })}
          </table>
      </div>
    </div>

  )
}
