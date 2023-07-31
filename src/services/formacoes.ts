import axios from "axios";

const formacoesAPI = axios.create({baseURL:"https://portfolio-api-i9yq.onrender.com/formacao"});

export async function getFormacoes(){
    const response = await formacoesAPI.get('');
    return response.data;
}