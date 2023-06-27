<img width="150px" align="right" src="https://www.groupevelours.com/wp-content/themes/rsw-velours/assets/logos/logo_footer.svg"/>  
<br/>
 <h1>TPhoneBox - Aplicativo de assinaturas online</h1>
 
<p><strong>Contexto</strong></p>

Simulação da página Home de um aplicativo de assinaturas. Interface intuitiva e visualmente atraente, projetada para facilitar a navegação e fornecer todas as informações necessárias para a assinatura mensal de um smartphone.

Back-end: A <strong>REST</strong> API foi construída utilizando <strong>Node.js</strong>, com suporte para <strong>MongoDB</strong> e <strong>MySQL</strong>, utiliza as ORMs <strong>Prisma</strong> e <strong>Mongoose</strong>. 
Foram desenvolvidas operações CRUD (Create, Read, Update, Delete) dividindo as responsabilidades em <strong>Model</strong>, <strong>Repository</strong> e <strong>Controller</strong>. A camada de Model define a estrutura dos dados e as relações entre eles. 
O Repository lida com a comunicação direta com o banco de dados. O Controller é responsável por lidar com respostas e requisições HTTP.

Front-end: A aplicação foi construída com <strong>Vue.js</strong>. Foi utilizado <strong>Axios</strong>, um cliente HTTP baseado em Promises para realizar as requisições ao back.
Para a estilização foi utilizado <strong>HTML</strong> e <strong>CSS</strong>.

Testes: Foi realizado uma camada de testes automatizados para o FrontEnd da aplicação utilizando Python e Selenium.

Você pode testar o site seguindo a explicação em "Como rodar o projeto na sua máquina".

<h2>Imagem da aplicação</h2>

<br/>

![Captura de tela de 2023-06-27 11-36-40](https://github.com/lana2-2karla/TPhoneBox/assets/93014254/486890e5-4626-4394-abf9-f7a57e637400)


<br/>

<details>
 <summary><strong>Habilidades desenvolvidas durante o desenvolvimento do projeto</strong></summary><br />
 
 <h2>Back-End</h2>
 
- :fire: **Organizar uma aplicação completa desde o primeiro passo**; :fire:
- Criar e modelar um banco de dados utilizando Prisma e Mongoose;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada camada;
- Entender e aplicar os padrões REST;
-  :fire: **Realizar testes com Python e Selenium**; :fire:
- Utilizar Dotenv para as variáveis de ambiente secretas.

<h2>Front-End</h2>
 
- :fire: **Organizar a estrutura de componentes e páginas de um site**; :fire:
- Estruturar e utilizar hooks no Vue.js;
- Delegar responsabilidades específicas para cada componente e camada;
- Realizar requisições HTTP através do Axios;
- Utilizar HTML e CSS para estilização.

 
</details>

<details>
 <summary><strong>Tecnologias utilizadas</strong></summary><br />
 
  <p><strong>Back-end</strong>: JavaScrip, Node.js, Nodemon, Express.js, Dotenv, Prisma, Moongose, MySQL, MongoDB, ESlint;</p>
  
  <p><strong>Front-End</strong>: Vue.js, HTMl, CSS, Axios, Vite e ESlint.</p>

  <p><strong>Testes</strong>: Python, Selenium, Webdriver-manager e unittest</p>

</details>

<details>
 
   <summary><strong>Como rodar o projeto na sua máquina:</strong></summary><br />
 
   <strong>:sparkles: Rodando Localmente</strong>
  
  >Clone o projeto em uma pasta/repositório git com o comando `git clone`
  
  - Caso não tenha o git instalado em sua máquina, você pode realizar a instalação através da [documentação](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
  
  >Entre na pasta do projeto clonado
  
  - Caso esteja utilizando linux, você pode entrar utilizando o comando `cd nome-do-projeto`
    
  >Entre na pasta back-end - `cd backend`
  
  >Instale as dependências com `npm install`
 
  - Para a aplicação funcionar corretamente você precisa editar o arquivo .env.example: 
    - alterar as variáveis de ambiente com o seu nome de usuário e senha de conexão com o banco de dados.
    - mudar o nome do aquivo para **.env**, caso contrário a aplicação não encontrará o arquivo. 
    
   - Você consegue encontrar mais informações [aqui](https://www.freecodecamp.org/portuguese/news/como-usar-variaveis-de-ambiente-do-node-com-um-arquivo-dotenv-para-node-js-e-npm/)

 >Rode as migrations com o comando `prisma migrate dev --name init`
 
:eyes: **De olho nas dicas:** 
 
 1. Para rodar o projeto desta forma, **obrigatóriamente** você deve ter o `node` instalado em seu computador.
  
 > Para iniciar a aplicação: `npm start`
 
 
 **AVISOS MEGA IMPORTANTES!**
 
 Para você conseguir testar as rotas através da sua máquina é necessário que você popule o banco do dados:
 
 - Faça uma requisicão do tipo POST na rota `http://localhost:3000/smartphone` utilizando sua ferramenta de preferência.
   > Como indicação o Postman ou ThunderClient
 - O corpo da requisição deve seguir esse modelo: `{"name": "iPhone 11","price": 1647.01,"image": "https://yacare-products-image.s3.sa-east-1.amazonaws.com/iphone/4x/iPhone+11.png"}`
 
  > Após iniciar a aplicação back-end é hora de partirmos para o último passo
  
  - Entre na pasta front-end - utilize `cd ..` para sair da pasta atual e `cd frontend` para entrar na pasta de front
  - Escreva o comando `npm run dev`
  
  - :sparkles:E pronto!! O projeto está rodando na sua máquina:sparkles:
 
</details>

<details>
 <summary><strong>Execução dos testes</strong></summary><br />
  
   - Entre na pasta de testes `cd testes`
  
   - Rode o comando `python3 meus_testes.py`
 
</details>
