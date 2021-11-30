require('dotenv').config();
const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


console.log(process.env)


const main = async () =>{

    const busquedas = new Busquedas();

    let opt;

    do{

        opt = await inquirerMenu();

        switch (opt ) {
            case 1:

                const termino = await leerInput( 'Ciudad: ' );
                const lugares = await busquedas.ciudad( termino );
                const id = await listarLugares( lugares );
                const lugarSel = await lugares.find( l => l.id === id );
               
                console.log( '\nInformación de la ciudad\n'.green );
                console.log( 'Ciudad:'.green, lugarSel.nombre );
                console.log( 'Lat:'.green, lugarSel.lat);
                console.log( 'Lng'.green, lugarSel.lng);
                console.log( 'Temp'.green );
                console.log( 'Min'.green );
                console.log( 'Max'.green );
                break;
            case 2:
                
                break;
            case 0:
                
                break;
        
            default:
                break;
        }
       

        if ( opt !== 0 ) await pausa();

    } while (opt !== 0)

   
    
    

}

main();