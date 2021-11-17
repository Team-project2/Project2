import React, { useState ,useEffect } from 'react'
import { useParams } from "react-router-dom";
import {RiEmotionHappyFill} from "react-icons/ri"
import {FaSadTear} from "react-icons/fa"

import axios, { Axios } from 'axios';
export default function Book() {
    const p = useParams();
    const [bookList, setBooksList] = useState([])
<<<<<<< HEAD
    const [likesList, setLikesList] = useState([])




=======
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
    useEffect(async() => {
        const result = await axios.get(`http://localhost:5000/book/${p.id}`);
        console.log(result.data,"result.data")
        setBooksList(result.data);
     },[])
    // const videoId = "watch?v=vm_kACNrF3E"
<<<<<<< HEAD
//-here




  const likeFunc=(async()=>{
    console.log(p.id);
const likes = await axios.put(`http://localhost:5000/likes/${p.id}`)
const arr = likes.data.filter(ele=>{
  return ele.id == p.id
})
setBooksList(arr)
console.log(likes.data,"liked!!")
  })
  



    return (
     
     bookList.length ?  <div > 
     <div className="bookcontainer">
         <h1 className="movieName">{bookList[0] && bookList[0].name}</h1>
=======
    return (
     bookList.length ?  <div >
     <div className="bookcontainer">
         <h1>{bookList[0] && bookList[0].name}</h1>
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
         <img className="bookimg" src={bookList[0] && bookList[0].imgUrl}/>
         <hr/>
         <br/>
                 {/* <h4>Writer: {bookList[0] && bookList[0].writer}</h4> */}
                 <div className="descrrr">
<<<<<<< HEAD
                 <h3 className="movieName">Discription :</h3>
                 <p className="decreptionText">{bookList[0] && bookList[0].discreption}</p>
                 <br/></div>
                 <h3 className="movieName">Triller :</h3>

=======
                 <h3>Discription :</h3>
                 <p>{bookList[0] && bookList[0].discreption}</p>
                 <br/></div>
                 <h3>Triller :</h3>
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
                 <iframe
       width="420"
       height="315"
       src={`https://www.youtube.com/embed/${bookList[0].videoId}`}
     ></iframe>
<<<<<<< HEAD
     <br/>
     <h2>Did you like it!</h2>
     {bookList[0].like === true ? <FaSadTear onClick={()=>{likeFunc()}} className="Deslikebtn"/>:
          <RiEmotionHappyFill className="likebtn" onClick={()=>{likeFunc()}}/>

}
     {/* <button className="likebtn" onClick={()=>{likeFunc()}}><i class="far fa-smile-wink"></i></button>
     <button  className="Deslikebtn"><i class="far fa-angry"></i></button> */}
     
 

=======
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
       {/* <video width="320" height="240" controls>
         <source src="movie.mp4" type="video/mp4">
         <source src="movie.ogg" type="video/ogg">
       </video> */}
       </div>
   </div>:""
<<<<<<< HEAD
   
=======
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
    );
}
