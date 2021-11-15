const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const Books =[{id: 1, name: "Don't QUIT" ,imgUrl : "https://www.storytel.com/images/e/640x640/0000824232.jpg",writer:"Hal fisher" ,discreption: "gfkgfkkdfjkjd"},
{id: 2, name: "The Brain" ,imgUrl : "https://images-na.ssl-images-amazon.com/images/I/51niJtZm3qL._SX324_BO1,204,203,200_.jpg",writer:"David Eagleman"},
{id: 3, name: "The Inside Track" ,imgUrl : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533151048l/41023086._SY475_.jpg",writer:"Hal fisher"},
{id: 4, name: "The Chain" ,imgUrl : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601216004l/42779092._SY475_.jpg",writer:"Adrian McKinty"},
{id: 5, name: "The Whisper Man" ,imgUrl : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541864083l/41940236.jpg",writer:"Alex North"},
{id: 6, name: "Mind Power" ,imgUrl : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1364928261l/180089.jpg",writer:"John Kehoe"}];


app.get("/Books",(req,res)=>{
res.status(200)
res.json(Books)
})

app.get("/book/:id",(req,res)=>{
  let resArr = []
  const idPage = req.params.id
  console.log(idPage)
for(let i=0;i<Books.length;i++){
  if(Books[i].id == idPage){
    resArr.push(Books[i])


  }}

  res.status(200)
  console.log(resArr)
res.json(resArr)
})

// app.get("/book/:index",(req,res)=>{
//   res.status(200)
// res.json(Books)
// })

// app.delete("/delete/:index",(req,res)=>{
//   const index = req.params.index
//   ToDoList.splice(index,1)
//   res.status(201)
// res.json(Books);
// })
// app.post("/add",(req,res)=>{
//   const {task}=req.body;
//   ToDoList.push(task)
//   res.status(200)
//   res.json(Books)
// })

// app.put("/update/:index",(req,res)=>{
//   const index=req.params.index
//   const {task}=req.body;
//   ToDoList[index] = task
// res.status(200)
// res.json(Books)
  
  
// })




 port = 3000;
app.listen(port, () => {
  console.log("server is running");
});
