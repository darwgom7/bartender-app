import axios from "axios";

const BARTENDER_REST_API_URL = 'https://bartender-api-060522.herokuapp.com/api';

class BartenderService {
    getBartenders() {
        return axios.get(`${BARTENDER_REST_API_URL}/bartenders`);
    }

    getResultadoIteracion(numeroIteracion, idPila) {
        return axios.get(`${BARTENDER_REST_API_URL}/bartender/obtenerResultadoIteracion?numeroiteraciones=${numeroIteracion}&idpila=${idPila}`);
    }
}

export default new BartenderService();