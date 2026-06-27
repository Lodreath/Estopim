// Esta função é um exemplo de endpoint de API que retorna um status 200 com a mensagem "Status ok".
// Você pode acessar este endpoint em /api/status para verificar se a API está funcionando corretamente.
/*
function status(request, response) {
  response
    .status(200)
    .send("Status ok. Alunos do curso.dev são acima da média!");
}
*/
//O metodo send() é usado para enviar uma resposta simples, enquanto o json() é usado para enviar uma resposta em formato JSON.
//json() é mais adequado quando você deseja enviar dados estruturados, como objetos ou arrays, texto complexo
//enquanto o método send() é mais adequado para enviar mensagens simples ou texto.

import database from "../../../../infra/database.js";

async function status2(request, response) {
  const result = await database.query('SELECT 1 + 1 as sum;');
  console.log(result);
  response.status(200).json({
    status: "ok",
    message: "Alunos do curso.dev são acima da média!",
  });
}





export default status2;


