const argv = require('yargs')
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es el límite de la multiplicación'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tine que ser un número';
        }
        else {
            return true;
        }
    })
    .argv;

module.exports = argv;