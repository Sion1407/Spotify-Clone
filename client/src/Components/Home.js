import React,{useState} from 'react'
import Rate from './Rate'

export default function Home() {
  
    const [rating, setRating] = useState(0);
    const [rating2, setRating2] = useState(0);
    return (
      
    <div className='container'>
        <div>
        <h1>Top 10 Artists</h1>
        <Rate rating={rating} onRating={(rate) => setRating(rate)} />
        </div>
        <div>
        <h1>Top 10 Songs</h1>
        </div>
        
    </div>

  )
}
