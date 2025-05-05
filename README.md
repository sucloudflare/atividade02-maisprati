
   <h1>Sistema de Gerenciamento de Hotéis</h1>

  <p>Este é um sistema simples de gerenciamento de hotéis, onde você pode adicionar hotéis, fazer reservas, cancelar reservas, e consultar reservas existentes. O sistema foi desenvolvido utilizando <strong>JavaScript</strong> com o framework <strong>Express</strong>.</p>

  <h2>Funcionalidades</h2>
    <ul>
        <li><strong>Adicionar Hotéis</strong>: Permite adicionar novos hotéis ao sistema.</li>
        <li><strong>Buscar Hotéis por Cidade</strong>: Permite listar todos os hotéis disponíveis em uma cidade específica.</li>
        <li><strong>Fazer Reserva</strong>: Permite fazer uma reserva em um hotel, diminuindo a quantidade de quartos disponíveis.</li>
        <li><strong>Cancelar Reserva</strong>: Permite cancelar uma reserva, aumentando a quantidade de quartos disponíveis.</li>
        <li><strong>Listar Reservas</strong>: Mostra todas as reservas feitas, incluindo detalhes do hotel e do cliente.</li>
    </ul>

  <h2>Estrutura de Pastas</h2>
    <pre>
hotel-management/
├── controllers/
│ └── hotelController.js # Controladores que gerenciam as interações do usuário
├── models/
│ ├── hotel.js # Modelo de Hotel
│ └── reserva.js # Modelo de Reserva
├── services/
│ └── hotelService.js # Lógica de negócios (adicionar, buscar, reservar, etc.)
├── utils/
│ └── idGenerator.js # Gerador de IDs únicos
├── app.js # Arquivo principal que inicia o servidor
└── package.json # Dependências do projeto
    </pre>

  <h2>Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>Node.js</strong></li>
        <li><strong>Express</strong>: Framework para construção do servidor.</li>
        <li><strong>Body-parser</strong>: Para análise de dados no corpo das requisições HTTP.</li>
    </ul>

   <h2>Instalação</h2>
    <h3>1. Clonar o Repositório</h3>
    <p>Primeiro, clone o repositório para sua máquina local:</p>
    <pre>
git clone https://github.com/sucloudflare/atividade02-maisprati/
cd atividade02-maisprati
    </pre>

   <h3>2. Instalar as Dependências</h3>
    <p>Execute o comando abaixo para instalar as dependências do projeto:</p>
    <pre>
npm install
    </pre>

   <h3>3. Iniciar o Servidor</h3>
    <p>Para rodar o servidor, execute o comando:</p>
    <pre>
npm start
    </pre>
    <p>O servidor será iniciado na porta 3000. Você pode acessar a API usando uma ferramenta como o <a href="https://www.postman.com/">Postman</a> ou diretamente pelo <code>curl</code>.</p>

   <h2>Endpoints da API</h2>

  <h3>1. POST /adicionarHotel</h3>
    <p>Adiciona um novo hotel ao sistema.</p>
    <h4>Exemplo de Requisição:</h4>
    <pre>
{
  "id": 1,
  "nome": "Hotel Central",
  "cidade": "São Paulo",
  "quartosTotais": 100
}
    </pre>
    <h4>Resposta:</h4>
    <pre>
Hotel adicionado com sucesso.
    </pre>

  <h3>2. GET /buscarHoteis</h3>
    <p>Busca hotéis disponíveis em uma cidade específica.</p>
    <h4>Exemplo de Requisição (parametro na query):</h4>
    <pre>
GET http://localhost:3000/buscarHoteis?cidade=São Paulo
    </pre>
    <h4>Resposta:</h4>
    <pre>
[
  {
    "id": 1,
    "nome": "Hotel Central",
    "cidade": "São Paulo",
    "quartosTotais": 100,
    "quartosDisponiveis": 100,
    "avaliacoes": []
  }
]
    </pre>

   <h3>3. POST /fazerReserva</h3>
    <p>Faz uma reserva em um hotel.</p>
    <h4>Exemplo de Requisição:</h4>
    <pre>
{
  "idHotel": 1,
  "nomeCliente": "João Silva"
}
    </pre>
    <h4>Resposta:</h4>
    <pre>
Reserva feita com sucesso.
    </pre>

   <h3>4. POST /cancelarReserva</h3>
    <p>Cancela uma reserva e libera o quarto.</p>
    <h4>Exemplo de Requisição:</h4>
    <pre>
{
  "idReserva": 1
}
    </pre>
    <h4>Resposta:</h4>
    <pre>
Reserva cancelada com sucesso.
    </pre>

   <h3>5. GET /listarReservas</h3>
    <p>Lista todas as reservas feitas.</p>
    <h4>Exemplo de Requisição:</h4>
    <pre>
GET http://localhost:3000/listarReservas
    </pre>
    <h4>Resposta:</h4>
    <pre>
[
  {
    "idReserva": 1,
    "idHotel": 1,
    "nomeCliente": "João Silva"
  }
]
    </pre>

  <h2>Contribuindo</h2>
    <p>Sinta-se à vontade para fazer um fork do repositório, enviar pull requests ou sugerir melhorias.</p>

   <h2>Licença</h2>
    <p>Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.</p>

   <h2>Sobre o Autor</h2>
    <p>Desenvolvido por <strong>Edson Bruno</strong>, com o objetivo de aprender e aprimorar habilidades em desenvolvimento de software com JavaScript, Node.js e Express.</p>

