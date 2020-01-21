const { argv } = require('./config/yargs');
const { crearArchivo,listarTabla } = require('./multiplicar/mutiplicar');

console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite);        
        break;
    case 'crear':
        crearArchivo(argv.base).then(archivo =>{console.log(`archivo ${archivo} creado`)}).catch(err => {console.log(err)});
        break;
    default:
        console.log('comando no reconocido');
        break;
}

