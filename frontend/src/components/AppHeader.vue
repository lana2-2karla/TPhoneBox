<template>
  <div class="header">
    <div class="logo">
      <img src="https://www.groupevelours.com/wp-content/themes/rsw-velours/assets/logos/logo_footer.svg" alt="Logo"/>
    </div>
    <div class="buttons">
      <button class="button button-primary">Já sou TPhoneBox</button>
      <button class="button button-secondary">Quero ser TPhoneBox</button>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: rgb(45, 45, 56);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  margin-right: 16px;
  margin-left: 10%;
}

.logo img {
  width: 100px;
  height: auto;
}

.buttons {
  display: flex;
  align-items: center;
  margin-right: 10%;
}

.buttons .button {
  padding: 8px 16px;
  margin-left: 8px;
  margin-right: 8px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 21px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
}

.buttons .button:first-child {
  margin-left: 0;
  background-color: transparent;
  border: 2px solid #fff;
  width: 205px;
  height: 42px;
}

.buttons .button-secondary {
  background-color: rgb(39, 174, 96);
  width: 277px;
  height: 42px;
}

.buttons .button:hover {
  transform: scale(1.1);
}
</style>



