import React, { useState ,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios, { Axios } from 'axios';

export default function Book() {
    const p = useParams();
    const [bookList, setBooksList] = useState([])

    useEffect(async() => {
        const result = await axios.get(`http://localhost:3000/book/${p.id}`);
        console.log(result.data,"result.data")
        setBooksList(result.data);
     },[])
    
    return (
     
      <div className="booksImg"> 
      <div className="bookcontainer">
          <h1>{bookList[0] && bookList[0].name}</h1>
          <img className="bookimg" src={bookList[0] && bookList[0].imgUrl}/>
                  <h4>Writer: {bookList[0] && bookList[0].writer}</h4>
                  <h3>Discription :</h3>
                  <p>{bookList[0] && bookList[0].discreption}</p>
      
        {/* <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4">
          <source src="movie.ogg" type="video/ogg">
        </video> */}
        </div>
    </div>
    );
}