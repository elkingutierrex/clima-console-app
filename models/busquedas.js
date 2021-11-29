const axios = require('axios');


class Busquedas {
    
    historial = [ '', '',];

    constructor(){
        // TODO: leer db si existe

    }

    get paramsMapbox(){
        return {
            'access_token': 'pk.eyJ1IjoiZWxraW5ndXRpZXJyZXgiLCJhIjoiY2t3ZTd1dmtpMDI1dzJxbzR1eXd2YWt1ZCJ9.fj3dqcFr-YprZvEejFqa_w',
            'limit': '5',
            'language' : 'es'
        }
    }

    async ciudad ( lugar = '' ){

        try{
            //petición http
            console.log('buscame esta ', lugar );
            // const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?language=es&access_token=pk.eyJ1IjoiZWxraW5ndXRpZXJyZXgiLCJhIjoiY2t3ZTd1dmtpMDI1dzJxbzR1eXd2YWt1ZCJ9.fj3dqcFr-YprZvEejFqa_w&limit=5`)
            const instance = axios.create({
                baseURL : `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                
                params: this.paramsMapbox
            })
            const resp = await instance.get();
            console.log( resp.data );


            return [];
        }catch (error) {
            return [];
        }

      
    }

}

module.exports = Busquedas;
