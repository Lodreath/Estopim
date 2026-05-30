//para rodar os testes, basta usar o comando: npm test
//o comando irá procurar por arquivos que terminem com .test.js e rodar os testes contidos neles

//para rodar um teste específico, basta usar o comando: npm test -- nomeDoTeste
//para continuar rodando o teste continuamente, basta usar o comando: npm test -- --watchAll

//para encerrar o processo de teste, basta usar o comando: ctrl + c

test("deve retornar a soma de: 2 + 2 = 4", () => {
    const resultado = 2 + 2;
    expect(resultado).toBe(4);
});

const calculadora = require("../../models/calculadora.js");

test("deve retornar a soma de: 2 + 2 = 4", () => {
    const resultado = calculadora.somar(2, 2);
    expect(resultado).toBe(4);
    console.log(resultado);
});

//TDD - Test Driven Development é uma metodologia de desenvolvimento de software onde 
// os testes são escritos antes do código de produção. O processo é o seguinte:

//1. Escreva um teste que falhe (Red)
//2. Escreva o código mínimo necessário para fazer o teste passar (Green)
//3. Refatore o código, se necessário, para melhorar a qualidade do código (Refactor)
//4. Repita o processo para cada funcionalidade que deseja implementar
//por exemplo, se quisermos implementar uma função de subtração, podemos seguir os passos do TDD:

test("deve retornar a subtração de: 5 - 3 = 2", () => {
    const resultado = calculadora.subtrair(5, 3);
    expect(resultado).toBe(2);
    console.log(resultado);
});

//1. Escrevemos o teste acima, que falha porque a função subtrair ainda não existe (Red)
//2. Escrevemos o código mínimo necessário para fazer o teste passar: 
// VÁ PARA O ARQUIVO models/calculadora.js E ADICIONE A FUNÇÃO subtrair


