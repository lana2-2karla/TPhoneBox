<template>
    <div class="card">
      <div class="card-header">
        <h2>iPhone 7</h2>
      </div>
      <div class="card-body">
        <img src="https://m.media-amazon.com/images/I/41kBmL3zaZL._AC_SX679_.jpg" alt="product.name" class="product-image" />
        <p>a partir de:</p>
        <p class="product-price">R$ 10.000</p>
        <p>em até 12 vezes sem juros</p>
        <p>Período de assinatura: 12 meses</p>
        <button class="subscribe-button">Quero Assinar</button>
      </div>
    </div>
  </template>
  
  <style>
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
    padding: 12px 24px; /* Aumento do padding para deixar o botão maior */
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
  