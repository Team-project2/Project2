
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
<<<<<<< HEAD

const Books =[{id: 1 ,like:false, name: "Masha and the bear" ,imgUrl : "https://cdn.nickjrindia.com/wp-content/uploads/2019/07/15083344/1920-x-1440-Masha.jpg",discreption: "Masha and the Bear are heroes of Russian folklore, known to all Russian children. Just that in the series they are different and live in the modern world, which gave the creators from Animaccord Animation Studio the ability to bring new possibilities to their interactions. Series tell us about a unique relationship between two main characters. Masha is an exceedingly active little girl who can't sit still on one place and has to make everything a business of her own. The Bear is a big and hearty guy who loves comfort and quietness. After their first met the Bear is always in anticipation for another fun and wild adventure that Masha will surely pull him in. Every 7-minute high-quality 3D CGI animated episode includes original music and songs and the series is largely played out through action with little dialog making it easy for children around the world to understand."

,videoId:"Q1cnJVWzrT8"},
{id: 2,like:false, name: "Sali" ,imgUrl : "https://starzplay-img-prod-ssl.akamaized.net/474w/evision/SALLYY1985S01E001/SALLYY1985S01E001-474x677-PST.jpg" ,videoId:"lUyH3TU_STc",discreption: 
"In the year 1885, the story follows Sarah Crewe, the young daughter of, Radcliffe Crewe, who is extremely wealthy due to running a diamond mine in British-ruled India. She starts attending an all-girl's seminary boarding school in London, where she excels in her studies and is loved deeply by many of her friends and classmates."},
{id: 3,like:false, name: "disney princess" ,imgUrl : "https://st.hzcdn.com/simgs/b2a1d16d0c815713_4-7988/home-design.jpg",videoId:"uQBy6jqbmlU",discreption:"A Disney Princess is everything a girl hopes to be: intelligent, kind, beautiful, and brave. It is important to remember that, despite being called princesses, not every Disney Princess is of royal blood. Heroines like Belle, Mulan, and Tiana were not born princesses, proving that any girl can become a princess, too!"},
{id: 4,like:false, name: "DORA" ,imgUrl : "https://cdnb.artstation.com/p/assets/images/images/011/922/239/large/dimas-np-1.jpg?1532100314",videoId:"N33ldfKwdLs",discreption:"Dora is a true heroine–an Indiana Jones for the preschool set. She is a born explorer, always eager for the next adventure. Though she's only seven, she serves as something of a big sister to her best friend, Boots, and to the viewer as well."},
{id: 5,like:false, name: "TOM & JERRY" ,imgUrl : "https://store-images.s-microsoft.com/image/apps.8958.13776874378039536.3cffff71-a16d-4c4a-acfd-5a8c5d1e5273.793873ed-95ce-4bab-9d1f-276bbd62033d",videoId:"HJFxTsX0Ok0",discreption:"Tom and Jerry is an American cartoon series about a hapless cat's never-ending pursuit of a clever mouse. Tom is the scheming cat, and Jerry is the spunky mouse. The series was driven entirely by action and visual humour; the characters almost never spoke"},
{id: 6,like:false, name: "Heidi" ,imgUrl : "https://m.media-amazon.com/images/M/MV5BZjk5MDBjMWItODQ4NC00YTgyLWJjYzEtMDZjZWNjODU1NTRjXkEyXkFqcGdeQXVyNjY1NDcwNTI@._V1_.jpg",videoId:"eNNtf9Ad2d0",discreption:"Heidi, classic children's novel by Swiss writer Johanna Spyri, published in two volumes in 1880–81. The title character is a young orphan who is sent to the Swiss mountains to live with her grandfather."},
{id: 7,like:false, name: "Zoro" ,imgUrl : "https://upload.wikimedia.org/wikipedia/en/5/5f/Kaiketsu_Zorro.jpg",videoId:"zr5Brf3fULM",discreption:"Zoro is a muscular man of average height with lightly tanned skin. ... Zoro's body is covered with scars from his many battles, most notably the massive scar stretching from his left shoulder to his right hip that he acquired during his loss against the world's greatest swordsman, Dracule Mihawk, at Baratie."},
{id: 8,like:false, name: "Batman" ,imgUrl : "https://m.media-amazon.com/images/M/MV5BYzRjOWY2YWUtOTM4Yy00ODE3LThlNzAtN2YxMWUzOGQ1MTMxXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_FMjpg_UX1000_.jpg",videoId:"11T4zZO9Yp8",discreption:"Batman: The Animated Series is an American superhero animated television series based on the DC Comics superhero Batman."},
{id: 9,like:false, name: "spider Man" ,imgUrl : "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png",videoId:"g4Hbz2jLxvQ",discreption:"Spider-Man has spider-like abilities including superhuman strength and the ability to cling to most surfaces. He is also extremely agile and has amazing reflexes. Spider-Man also has a “spider sense,” that warns him of impending danger. Spider-Man has supplemented his powers with technology."},
{id: 10,like:false, name: "Pokemon" ,imgUrl : "https://m.media-amazon.com/images/I/519li1ZUPxL._AC_.jpg",videoId:"nKodAXaLll0",discreption:"The original Pokémon is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best. Pokémon are divided into types, such as water and fire, each with different strengths. Battles between them can be likened to the simple hand game rock-paper-scissors."},
{id: 11,like:false, name: "Ninja Turtles" ,imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtamRBxQCVfJW92AJL5PSRPSCzfT1wfF62HA&usqp=CAU",videoId:"qGNcmC0t5Es",discreption:"The Turtles' hold distinct personality traits and skills, including: Raphael, as the oldest and biggest brother, he is the leader full of enthusiasm and bravado; Leonardo, the self-professed 'coolest' brother possesses irreverent charm and a rebel heart; Donatello, a mechanical genius and tech wizard whose ninja skills"},
{id: 12,like:false, name: "mawkly" ,imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzm43O_IiTM2hKndZ8kdVEFTS7wi34uDmONw&usqp=CAU",videoId:"ufHWoi7LDMM",discreption:"Here begins the adventures of the boy Mowgli as this black panther and his good friend the bear started to feed and raise Mowgli. With the help of wolves, Mowgli was also taken by a family of wolves to raise him among his young wolves."}]
=======
const Books =[{id: 1, name: "Masha and the bear" ,imgUrl : "https://cdn.nickjrindia.com/wp-content/uploads/2019/07/15083344/1920-x-1440-Masha.jpg",discreption: "Masha and the Bear are heroes of Russian folklore, known to all Russian children. Just that in the series they are different and live in the modern world, which gave the creators from Animaccord Animation Studio the ability to bring new possibilities to their interactions. Series tell us about a unique relationship between two main characters. Masha is an exceedingly active little girl who can't sit still on one place and has to make everything a business of her own. The Bear is a big and hearty guy who loves comfort and quietness. After their first met the Bear is always in anticipation for another fun and wild adventure that Masha will surely pull him in. Every 7-minute high-quality 3D CGI animated episode includes original music and songs and the series is largely played out through action with little dialog making it easy for children around the world to understand."
,videoId:"Q1cnJVWzrT8"},
{id: 2, name: "Sali" ,imgUrl : "https://starzplay-img-prod-ssl.akamaized.net/474w/evision/SALLYY1985S01E001/SALLYY1985S01E001-474x677-PST.jpg" ,videoId:"lUyH3TU_STc",discreption:
"In the year 1885, the story follows Sarah Crewe, the young daughter of, Radcliffe Crewe, who is extremely wealthy due to running a diamond mine in British-ruled India. She starts attending an all-girl's seminary boarding school in London, where she excels in her studies and is loved deeply by many of her friends and classmates."},
{id: 3, name: "disney princess" ,imgUrl : "https://st.hzcdn.com/simgs/b2a1d16d0c815713_4-7988/home-design.jpg",videoId:"uQBy6jqbmlU",discreption:"A Disney Princess is everything a girl hopes to be: intelligent, kind, beautiful, and brave. It is important to remember that, despite being called princesses, not every Disney Princess is of royal blood. Heroines like Belle, Mulan, and Tiana were not born princesses, proving that any girl can become a princess, too!"},
{id: 4, name: "DORA" ,imgUrl : "https://cdnb.artstation.com/p/assets/images/images/011/922/239/large/dimas-np-1.jpg?1532100314",videoId:"N33ldfKwdLs",discreption:"Dora is a true heroine–an Indiana Jones for the preschool set. She is a born explorer, always eager for the next adventure. Though she's only seven, she serves as something of a big sister to her best friend, Boots, and to the viewer as well."},
{id: 5, name: "TOM & JERRY" ,imgUrl : "https://store-images.s-microsoft.com/image/apps.8958.13776874378039536.3cffff71-a16d-4c4a-acfd-5a8c5d1e5273.793873ed-95ce-4bab-9d1f-276bbd62033d",videoId:"HJFxTsX0Ok0",discreption:"Tom and Jerry is an American cartoon series about a hapless cat's never-ending pursuit of a clever mouse. Tom is the scheming cat, and Jerry is the spunky mouse. The series was driven entirely by action and visual humour; the characters almost never spoke"},
{id: 6, name: "Heidi" ,imgUrl : "https://m.media-amazon.com/images/M/MV5BZjk5MDBjMWItODQ4NC00YTgyLWJjYzEtMDZjZWNjODU1NTRjXkEyXkFqcGdeQXVyNjY1NDcwNTI@._V1_.jpg",videoId:"eNNtf9Ad2d0",discreption:"Heidi, classic children's novel by Swiss writer Johanna Spyri, published in two volumes in 1880–81. The title character is a young orphan who is sent to the Swiss mountains to live with her grandfather."},
{id: 7, name: "Zoro" ,imgUrl : "https://upload.wikimedia.org/wikipedia/en/5/5f/Kaiketsu_Zorro.jpg",videoId:"zr5Brf3fULM",discreption:"Zoro is a muscular man of average height with lightly tanned skin. ... Zoro's body is covered with scars from his many battles, most notably the massive scar stretching from his left shoulder to his right hip that he acquired during his loss against the world's greatest swordsman, Dracule Mihawk, at Baratie."},
{id: 8, name: "Batman" ,imgUrl : "https://m.media-amazon.com/images/M/MV5BYzRjOWY2YWUtOTM4Yy00ODE3LThlNzAtN2YxMWUzOGQ1MTMxXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_FMjpg_UX1000_.jpg",videoId:"11T4zZO9Yp8",discreption:"Batman: The Animated Series is an American superhero animated television series based on the DC Comics superhero Batman."},
{id: 9, name: "spider Man" ,imgUrl : "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png",videoId:"g4Hbz2jLxvQ",discreption:"Spider-Man has spider-like abilities including superhuman strength and the ability to cling to most surfaces. He is also extremely agile and has amazing reflexes. Spider-Man also has a “spider sense,” that warns him of impending danger. Spider-Man has supplemented his powers with technology."},
{id: 10, name: "Pokemon" ,imgUrl : "https://m.media-amazon.com/images/I/519li1ZUPxL._AC_.jpg",videoId:"nKodAXaLll0",discreption:"The original Pokémon is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best. Pokémon are divided into types, such as water and fire, each with different strengths. Battles between them can be likened to the simple hand game rock-paper-scissors."},
{id: 11, name: "Ninja Turtles" ,imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtamRBxQCVfJW92AJL5PSRPSCzfT1wfF62HA&usqp=CAU",videoId:"qGNcmC0t5Es",discreption:"The Turtles' hold distinct personality traits and skills, including: Raphael, as the oldest and biggest brother, he is the leader full of enthusiasm and bravado; Leonardo, the self-professed 'coolest' brother possesses irreverent charm and a rebel heart; Donatello, a mechanical genius and tech wizard whose ninja skills"},
{id: 12, name: "mawkly" ,imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzm43O_IiTM2hKndZ8kdVEFTS7wi34uDmONw&usqp=CAU",videoId:"k_GShG6K5Bs",discreption:"Here begins the adventures of the boy Mowgli as this black panther and his good friend the bear started to feed and raise Mowgli. With the help of wolves, Mowgli was also taken by a family of wolves to raise him among his young wolves."}]
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
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
<<<<<<< HEAD



app.put("/likes/:id",(req,res)=>{
const id = req.params.id
for(let i=0;i<Books.length;i++){
if(Books[i].id ==id){
  if(Books[i].like== true){
    Books[i].like = false
} else {
  Books[i].like = true
}
}}
res.status(200)
res.json(Books)
})



app.get("/rating",(req,res)=>{

  const starss = Array(5).fill()
  
  res.status(200)
  res.json(starss)
  })
    
 
  


=======
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
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
<<<<<<< HEAD




=======
>>>>>>> 6f16e98aeb5633e68ba35f9f63cabf0d200f2878
 port = 5000;
app.listen(port, () => {
  console.log("server is running");
});