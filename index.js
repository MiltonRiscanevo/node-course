// modulos core de node 
//http (crea un servidor o sirve para hacer peticiones a un servidor)
//fs (manejo de archivos)
//path (construccion de rutas de los archivos o directorios
//events (manejo de eventos)


// para poder importar el modulo en node.js se usa la sintax

const fs= require ("fs")

//leer un archivo con fs (ASINCRONO)

fs.readFile("saludo.txt", {encoding: "utf8"}, (err, data) =>{
    if(!err){
        console.log(data)
    }
})

const data =fs.readFileSync("saludo.txt",{encoding:"utf8"}); //(SINCRONO)
    console.log(data);


// se realiza escritos en los archivos usados    
fs.writeFile("saludo.txt", "Holla Mundito pequenito",(err) => {
    if(err){
        console.log(err);
    }else{
        console.log("ok escrito");
    }
})


//adiciona al final de un dato en el archivo a usar
fs.appendFile("saludo.txt"," add tex to final file",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("ok escrito");
    }
})

//cada uno tiene sus pares sincronos p.e
//writeFileSync
//appendFileSync
//readFileSync