import axios from "axios";

const tecnologiasAPI = axios.create({baseURL: "https://portfolio-api-i9yq.onrender.com/tecnologia"});

export async function getTecnologias() {
    const response = await tecnologiasAPI.get('');
    return response.data;
}




// import axios from "axios";

// const itensAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/item" });

// export async function getItens() {
//     const response = await itensAPI.get('')    
//     return response.data
// }