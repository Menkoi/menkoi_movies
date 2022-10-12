import React, {useState, useEffect} from "react";
import axios from 'axios';

import img1 from '../img/img1.png';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

//import { Carousel } from 'bootstrap';

function Home() {
    const [data, setData] = useState([])
    const redAlert = async() => {
         //Api fetch
         await axios.get('https://api.themoviedb.org/3/movie/550?api_key=edb165d5b232d239e5b43f306c09e004')
         .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        // Catch Error
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        redAlert();
    },[])

    return(
        <div className='homepage'>
            <img className='banner' src={img1} alt=''/>
            <h1>Featured</h1>
            

            {data.title}
            <img src={"https://image.tmdb.org/t/p/original" + data.poster_path} alt="" className="poster"/>
        </div>
        

        
        
    )
}

export default Home;