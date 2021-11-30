const axios = require('axios');


class Busquedas {
    
    historial = [ '', '',];

    constructor(){
        // TODO: leer db si existe

    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': '5',
            'language' : 'es'
        }
    }

    async ciudad ( lugar = '' ){

        try{
           
            console.log('buscame esta ', lugar );           
            const instance = axios.create({
                baseURL : `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                
                params: this.paramsMapbox
            })
            const resp = await instance.get();
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }))


            return [];
        }catch (error) {
            return [];
        }

      
    }

}

module.exports = Busquedas;
