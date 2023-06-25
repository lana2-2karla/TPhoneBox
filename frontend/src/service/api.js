import axios from 'axios';

// Criando uma instância do Axios com configurações personalizadas
const api = axios.create({
  baseURL: 'http://localhost:3000', // URL base da API
  timeout: 5000, // Tempo máximo de espera por uma resposta (em milissegundos)
  headers: {
    'Content-Type': 'application/json', // Tipo de conteúdo para as requisições
  },
});

const dataAPI = async () => {
  try {
    const response = await api.get('/smartphone');
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default {
  dataAPI,
};
