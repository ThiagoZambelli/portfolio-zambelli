import axios from "axios";

const tecnologiasAPI = axios.create({baseURL: "https://portfolio-api-i9yq.onrender.com/tecnologia"});

export async function getTecnologias() {
    const response = await tecnologiasAPI.get('');
    return response.data;
}




