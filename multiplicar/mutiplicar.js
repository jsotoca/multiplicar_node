const fs = require('fs');

let listarTabla = (base,limite)=>{
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base)=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`La base ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i < 13; i++) {
            data+=`${base} x ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`,data,(err)=>{
            if(err){
                reject(err);
            }
            resolve(`tablas/tabla-${base}.txt`);
        })
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

