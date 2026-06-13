# Estopim

Repositório inicial para acompanhar o desenvolvimento em um curso

PARA QUE TODOS OS SERVIÇOS FUNCIONEM DEVIDAMENTE TENHA CERTEZA DE RODAR OS COMANDOS ABAIXO NO TERMINAL:

/_O NVM (Node Version Manager) é uma ferramenta de linha de comando que permite gerenciar múltiplas versões do Node.js em um único sistema. Ele é amplamente utilizado por desenvolvedores que trabalham com Node.js, seja no front-end ou back-end, para alternar facilmente entre diferentes versões do Node conforme as necessidades de cada projeto._/

**Lista e instala o Gestor de Versão do Node escolhido para este projeto:**
Comandos Terminal:
nvm ls
nvm install lts/hydrogen
nvm alias default lts/hydrogen

---

/_O Next.js é um framework poderoso baseado no React, projetado para criar aplicações web modernas e performáticas. Ele oferece funcionalidades como renderização do lado do servidor (SSR), geração de sites estáticos (SSG) e renderização híbrida, permitindo que desenvolvedores criem aplicações otimizadas para SEO e com carregamento rápido. Além disso, o Next.js simplifica o roteamento, a manipulação de dados e a integração com APIs._/

**Instala o framework JS escolhido para este projeto com o NPM, o genrenciador de pacotes do Node:**
Comandos Terminal:
npm init
(pressionar enter para as opções padrão; license: (ISC) MIT)
npm install next@13.1.6
npm install react@18.2.0
npm install react-dom@18.2.0

---

/_Prettier é uma ferramenta de formatação de código que garante consistência e legibilidade no estilo do código. Ele reescreve o código seguindo regras pré-definidas de indentação, aspas, ponto-e-vírgula, comprimento de linha e espaçamento, eliminando discussões sobre estilo entre times de desenvolvimento._/

**Instala o framework estilização escolhido para este projeto com o NPM:**
Comandos Terminal:
npm install prettier --save-dev
npm run lint:check
npm run lint:fix

---

/_Jest é um framework de teste unitário de código aberto desenvolvido pelo Facebook, amplamente utilizado na comunidade JavaScript. Ele foi inicialmente criado para testar aplicações feitas com o React, mas sua versatilidade permite que seja usado em diversas plataformas, como Node.js, Redux, Angular, Vue.js e até projetos em TypeScript._/

**Instala o framework de testes automatizados escolhido para este projeto com o NPM:**
Comandos Terminal:
npm install --save-dev jest@29.6.2
npm run dev
npm run test
npm run test:watch

---

/\_O Docker é uma plataforma de código aberto que permite criar, distribuir e executar aplicações em ambientes isolados chamados contêineres. Esses contêineres encapsulam tudo o que uma aplicação precisa para funcionar, como código, bibliotecas, dependências e configurações, garantindo que ela seja executada de forma consistente em qualquer ambiente.

Os contêineres são mais leves e eficientes do que máquinas virtuais, pois compartilham o kernel do sistema operacional do host, eliminando a necessidade de um sistema operacional completo para cada instância. Isso reduz o consumo de recursos e acelera o tempo de inicialização.\_/

**Iniciar serviço docker e criar container para o banco de dados Postegres:**
Aviso:

- Docker já vem instalado no ambiente utilizado 'codespaces', em outros casos deve ser intalado
- Necessário criar o arquivo 'compose.yaml' na raiz do projeto, ou especificar o caminho do arquivo ao subir o container

Comandos Terminal para verificação de versão, instalação Postgres, abir e fechar serviço do BD:
docker --version
docker-compose --version

sudo apt update
sudo apt install postgresql-client

docker compose -f infra/compose.yaml up -d
psql --host=localhost --username=postgres --port=5432
docker compose -f infra/compose.yaml down
