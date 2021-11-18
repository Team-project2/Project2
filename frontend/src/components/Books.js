import React ,{useState,useEffect} from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function Books() {
    const [booksList, setBooksList] = useState([])
    const [booksPage, setBookPage] = useState()
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");
    const history = useHistory();

    
    useEffect(()=>{ //search from this
            const axiosData = async ()=> {
                    
                        const res = await axios.get('http://localhost:5000/Books');
                        setFilterd(res.data);
            };
            axiosData();
        },[])
        useEffect(()=> {
            const results = filtered.filter(res =>  result && res.name.toLowerCase().includes(result)

            ); 
            setData(results)
        } ,[result])
      const onChange =(elem)=> {
            setResult(elem.target.value);
        } //to this 
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

    
    
   
    return (
        <div className="BooksTitle">
          <h1 className="Title">CARTOON MOVIES : </h1>
          
          <div>
          <i class="fas fa-search"></i>
          <input 
            type="text"
            placeholder="search here .."
            value={result}
            onChange={onChange}
        />
        </div>
        {data.map((Books,i)=> (   
                <div key={i} className="searchBox">
                <h3>{Books.name}</h3>
                <hr/>
                <img  className="searchImg" src={Books.imgUrl} onClick={()=>{goTopage(Books.id)}} />
                </div>)
            )
        }
     <div className="mainContainer">
          {booksList.map((movies,i)=>{
            return (
              <div key={i} className="booksImg">
                <h1>{movies.name}</h1> <hr/>
               <img className="imgSize"  onClick={()=>{goTopage(movies.id)}} src={movies.imgUrl}/>
               <br/>
                  {/* <h4>Writer: {Books.writer}</h4> */}

<button className="btn button1" onClick={()=>{goTopage(movies.id)}}>Show details</button>
<br/>


<div>
    </div>
              </div>
            );
        })}
      </div> </div>
    );
}