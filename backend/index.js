import express from "express";
import { port, mongoDOURL } from "./config.js";
import mongoose from "mongoose"
import { book } from "./bookschema.js";

const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
     res.send('Hello World!')
})

//route for save a new book
app.post("/books", async(req,res) =>{
     try {
          if(
               !req.book.title || !req.book.auther || !req.book.publishyear
            ){
               console.log("missing field")
               res.status(400).send({message: "enter all the field"})
            }

            const newBook = {
               title : req.body.title,
               auther : req.body.auther ,
               publishyear : req.body.publishyear,
            }

            const Book = await book.create(newBook);
          return res.status(201).send(Book);

     } catch (error) {
          console.log(`Error ${error}`);
          console.log(error.message)
          return res.status(404);
     }
});

app.get("/books", async (req,res) => {
     
     try {
          const books = await book.find()
          
     } catch (error) {
          console.log(error.message)
          return res.status(404).send({message: message.error})
     }
})

//running the server if app is connected to  database
mongoose
.connect(mongoDOURL)
.then(()=>{
     console.log("app connected ")
     app.listen(port, ()=>{
          console.log(`listining at port ${port}`);
     })
})
.catch((error)=>{
     console.log(`Error connecting to the database ${error}`)
})





