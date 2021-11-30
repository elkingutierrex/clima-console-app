require('dotenv').config();
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


console.log(process.env)


const main = async () =>{

    const busquedas = new Busquedas();

    let opt;

    do{

        opt = await inquirerMenu();

        switch (opt ) {
            case 1:

                const lugar = await leerInput( 'Ciudad: ' );
                await busquedas.ciudad( lugar );

                console.log( lugar );
                console.log( '\nInformación de la ciudad\n'.green );
                console.log( 'Ciudad:'.green );
                console.log( 'Lat:'.green );
                console.log( 'Lng'.green );
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