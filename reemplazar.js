const fs= require ("fs")

//leer un archivo con fs (ASINCRONO)

fs.readFile("saludo.txt", {encoding: "utf8"}, (err, data) =>{
    if(!err){
        console.log(data)
        let content = data
        content=content.replace("pequenito", "Armando")
        fs.writeFile("saludo.txt",content,(err)=>{
            if (!err) {
                console.log("ok pelao");
            }
        })
    } else{
        console.log(err);
    }
})