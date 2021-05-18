require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public")); // dirname nos ayuda con el path de los archivos


app.get("/", function(req,res){
    res.send("Hola mundo");
})


app.get("/usuarios", function(req,res){
    res.send("Hola Fernando");
})


app.post("/", function(req,res){
    res.send("POST del path /");
})



app.listen(port, () => {
    console.log(`Server started - Port ${port}`);
} );



