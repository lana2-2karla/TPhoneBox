<template>
  <div class="card-container">
    <div v-for="item in data" :key="item.id" class="card">
      <div class="card-header">
        <h2>{{ item.name }}</h2>
      </div>
      <div class="card-body">
        <img :src="item.image" :alt="item.name" class="product-image" />
        <p>a partir de:</p>
        <p class="product-price">R$ {{ item.price }},00</p>
        <p>em até 12 vezes sem juros</p>
        <p>Período de assinatura: 12 meses</p>
        <button class="subscribe-button">Quero Assinar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../service/api';
import { onMounted, reactive, toRefs } from 'vue';

export default {
  setup() {
    // Criando um objeto reativo para armazenar os dados da API
    const state = reactive({
      data: [],
      error: null,
    });

    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await axios.dataAPI();
        state.data = response;
      } catch (error) {
        state.error = error;
      }
    };

    // Executar a função fetchData quando o componente for montado
    onMounted(fetchData);

    // Retornar os dados reativos para serem usados no template
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
/* Seus estilos CSS existentes aqui */

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 1300px; 
  padding-top: 150px;
  padding-bottom: 150px;
  margin-left: -50px; /* Valor negativo para mover para a esquerda */
  margin-right: auto;
}

.card {
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 16px;
  width: 300px;
  margin: 16px;
}

.card-header {
  text-align: center;
  margin-bottom: 8px;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 200px;
  height: auto;
  margin-bottom: 8px;
}

.product-price {
  font-weight: bold;
}

.subscribe-button {
  padding: 12px 24px;
  margin-top: 16px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 21px;
  background-color: rgb(39, 174, 96);
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
}

.subscribe-button:hover {
  transform: scale(1.1);
}
</style>
