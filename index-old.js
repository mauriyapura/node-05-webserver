
const http = require("http");

http.createServer((req,res)=>{
    console.log(req);    
    
    /*const user = {
        id: 123,
        name: "Fernando",
    }

    res.write(JSON.stringify(user));*/
    
    res.setHeader("Content-Disposition", "attachment; filename = usuarios.csv");
    res.writeHead(200,{"Content-Type": "application/csv"});
    res.write("id,name\n123,Fernando\n456,Marta");
    res.write("id,name\n123,Fernando\n456,Marta");


    res.end();
}).listen(3000);




