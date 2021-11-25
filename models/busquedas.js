const axios = require('axios');


class Busquedas {
    
    historial = [ '', '',];

    constructor(){
        // TODO: leer db si existe

    }

    async ciudad ( lugar = '' ){

        try{
            //petición http
            const resp = await axios.get('https://reqres.in/api/users?page=2')
            console.log( resp.data );


            return [];
        }catch (error) {
            return [];
        }

      
    }

}

module.exports = Busquedas;
