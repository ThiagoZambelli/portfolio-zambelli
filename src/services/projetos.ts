import axios from "axios";

const projetosAPI = axios.create({baseURL:"https://portfolio-api-i9yq.onrender.com/projeto" });

export async function getProjetos() {
    const response = await projetosAPI.get('');
    return response.data;
}