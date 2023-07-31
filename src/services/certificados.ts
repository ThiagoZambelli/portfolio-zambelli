import axios from "axios";

const certificadosAPI = axios.create({baseURL:"https://portfolio-api-i9yq.onrender.com/certificado"});

export async function getCertificados(){
    const response = await certificadosAPI.get('');
    return response.data;
}