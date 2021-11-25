const axios = require('axios');


class Busquedas {
    
    historial = [ '', '',];

    constructor(){
        // TODO: leer db si existe

    }

    async ciudad ( lugar = '' ){

        try{
            //petición http
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/medellin.json?language=es&access_token=pk.eyJ1IjoiZWxraW5ndXRpZXJyZXgiLCJhIjoiY2t3ZTd1dmtpMDI1dzJxbzR1eXd2YWt1ZCJ9.fj3dqcFr-YprZvEejFqa_w&limit=5')
            console.log( resp.data );


            return [];
        }catch (error) {
            return [];
        }

      
    }

}

module.exports = Busquedas;
