const argv = require('yargs')
             .command('listar','imprime en consola la tabla de multiplicar',{
                 base: {demand:true,alias:'b'},
                 limite: {alias:'l',default:10},
                 crear: {alias:'c',default:10}
             })
             .help()
             .argv;

module.exports = {
    argv
}