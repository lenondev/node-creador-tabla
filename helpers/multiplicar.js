const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, limite = 10) => {
    
    try {

        let salida  = '';
        let consola = '';
        for(let i=1; i<=limite; i++){
            salida  += `${base} ${'X'} ${i} ${'='} ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar) {
            console.log('================'.green);
            console.log('Tabla del.'.green , colors.blue(base));
            console.log('================'.green);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
            
        return(`Se ha creado el archivo: Tabla-${base}.txt`.green);
        
        
    } catch (err) {

        throw err;
    }
};

module.exports = {
    crearArchivo: crearArchivo
}