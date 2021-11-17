import React ,{useState,useEffect} from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function Books() {
    const [booksList, setBooksList] = useState([])
    const [booksPage, setBookPage] = useState()
    const history = useHistory();
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");
<<<<<<< HEAD

    

    useEffect(()=>{
            const fetchData = async ()=> {
                        const res = await axios.get('http://localhost:5000/Books');
                        setFilterd(res.data);
                 
                  };
                  fetchData(); 
=======
    useEffect(()=>{
            const fetchData = async ()=> {
                    try{
                        const res = await axios.get('http://localhost:5000/Books');
                        setFilterd(res.data);
                    }catch(err){
                        throw new Error(err);
                    }
                     };
                  fetchData();
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
        },[]);
        useEffect(()=> {
<<<<<<< HEAD
            const results = filtered.filter(res=>  result && res.name.toLowerCase().includes(result)

            ); 
=======
            const results = filtered.filter(res=> result && res.name.toLowerCase().includes(result)
            );
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
            setData(results)
        } ,[result])
        //console.log(data)
      const onChange =(e)=> {
            setResult(e.target.value);
        }
    useEffect(async() => {
       const result = await axios.get("http://localhost:5000/Books");
       setBooksList(result.data);
    },[])
    // useEffect(async()=>{
      // const booksPage = await axios.get("/book/:id");
      // setBookPage(booksPage.data);
    // })
    const goTopage =(id) => {
      history.push(`/book/${id}`)
    }
<<<<<<< HEAD

    
    
   
    return (
        <div className="BooksTitle">
          <h1 className="Title">CARTOON MOVIES : </h1>
          
          <div>
          <i class="fas fa-search"></i>
          <input 
=======
    return (
        <div className="BooksTitle">
          <h1 className="Title">Movies List : </h1>
          <div>
          <i class="fas fa-search"></i>
          <input
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
            type="text"
            placeholder="search here .."
            value={result}
            onChange={onChange}
        />
        </div>
<<<<<<< HEAD
        {data.map((Books,i)=> (   
=======
        {data.map((Books,i)=> (
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
                <div key={i} className="searchBox">
                <h3>{Books.name}</h3>
                <hr/>
                <img  className="searchImg" src={Books.imgUrl} onClick={()=>{goTopage(Books.id)}} />
<<<<<<< HEAD

=======
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
                </div>)
            )
        }
     <div className="mainContainer">
          {booksList.map((Books,i)=>{
            return (
              <div key={i} className="booksImg">
                <h1>{Books.name}</h1> <hr/>
<<<<<<< HEAD
               <img className="imgSize"  onClick={()=>{goTopage(Books.id)}} src={Books.imgUrl}/>
               <br/>
                  {/* <h4>Writer: {Books.writer}</h4> */}

<button className="btn button1" onClick={()=>{goTopage(Books.id)}}>Show details</button>
<br/>


            
<div>
  
       
=======
               <img className="imgSize" src={Books.imgUrl}/>
               <br/>
                  {/* <h4>Writer: {Books.writer}</h4> */}
<button className="btn button1" onClick={()=>{goTopage(Books.id)}}>Show details</button>
<div>
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
    </div>
              </div>
            );
        })}
<<<<<<< HEAD
 
=======
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
      </div> </div>
    );
}