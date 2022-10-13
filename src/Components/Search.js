import React, {useState, useEffect} from "react";
import axios from 'axios';


function Search() {
    const [data, setData] = useState([]);

    const redAlert = async() => {
         //Api fetch
         await axios.get('https://ws-public.interpol.int/notices/v1/un')
         .then(res => {
            console.log(res.data.results)
            setData(res.data.results)
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
            <h1>Search</h1>
            <input type='text'></input>
            <button type="submit">Go</button>
        </div> 
    )
}

export default Search;