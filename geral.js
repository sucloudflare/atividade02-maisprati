// 1. Redução do tempo de vida de um fumante
function calculoFumante(cigarrosPorDia, anosFumando) {
    let minutosPerdidosPorCigarro = 10;
    let cigarrosPorAno = cigarrosPorDia * 365;
    let minutosPerdidos = cigarrosPorAno * anosFumando * minutosPerdidosPorCigarro;
    let diasPerdidos = minutosPerdidos / (24 * 60);
    console.log(`O fumante perderá aproximadamente ${diasPerdidos.toFixed(2)} dias de vida.`);
}

// 2. Velocidade do carro
function verificarMulta(velocidade) {
    if (velocidade > 80) {
        let multa = (velocidade - 80) * 5;
        console.log(`Você foi multado! O valor da multa é R$ ${multa.toFixed(2)}`);
    } else {
        console.log("Você não foi multado.");
    }
}

// 3. Cálculo do preço da passagem
function calcularPassagem(distancia) {
    let preco = (distancia <= 200) ? distancia * 0.50 : distancia * 0.45;
    console.log(`O preço da passagem é R$ ${preco.toFixed(2)}`);
}

// 4. Verificando se é possível formar um triângulo
function verificarTriangulo(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        console.log("É possível formar um triângulo.");
    } else {
        console.log("Não é possível formar um triângulo.");
    }
}

// 5. Jogo de JoKenPo (Pedra, Papel, Tesoura)
function jogarJoKenPo(jogadorEscolha) {
    const escolhas = ['Pedra', 'Papel', 'Tesoura'];
    let computadorEscolha = escolhas[Math.floor(Math.random() * 3)];
    console.log(`Você escolheu ${jogadorEscolha} e o computador escolheu ${computadorEscolha}.`);
    if (jogadorEscolha === computadorEscolha) {
        console.log("Empate!");
    } else if ((jogadorEscolha === 'Pedra' && computadorEscolha === 'Tesoura') || 
               (jogadorEscolha === 'Papel' && computadorEscolha === 'Pedra') ||
               (jogadorEscolha === 'Tesoura' && computadorEscolha === 'Papel')) {
        console.log("Você ganhou!");
    } else {
        console.log("Você perdeu!");
    }
}

// 6. Adivinhação de número
function adivinharNumero() {
    let numeroSorteado = Math.floor(Math.random() * 5) + 1;
    let tentativa = prompt("Tente adivinhar o número sorteado entre 1 e 5:");
    if (parseInt(tentativa) === numeroSorteado) {
        console.log("Você acertou!");
    } else {
        console.log(`Você errou! O número sorteado era ${numeroSorteado}.`);
    }
}

// 7. Cálculo de aluguel de carro
function calcularAluguelCarro(tipoCarro, dias, kmPercorridos) {
    let precoPorDia = tipoCarro === "luxo" ? 150 : 90;
    let precoPorKm = tipoCarro === "luxo" ? (kmPercorridos <= 200 ? 0.30 : 0.25) : (kmPercorridos <= 100 ? 0.20 : 0.10);
    let total = (precoPorDia * dias) + (precoPorKm * kmPercorridos);
    console.log(`O preço a ser pago é R$ ${total.toFixed(2)}`);
}

// 8. Sistema de pontos por atividade física
function calcularPontos(atividades) {
    let pontos;
    if (atividades <= 10) {
        pontos = atividades * 2;
    } else if (atividades <= 20) {
        pontos = atividades * 5;
    } else {
        pontos = atividades * 10;
    }
    let dinheiro = pontos * 0.05;
    console.log(`Você ganhou ${pontos} pontos, o que equivale a R$ ${dinheiro.toFixed(2)}.`);
}

// 9. Total de salários pagos por sexo
function calcularSalarios() {
    let totalHomens = 0, totalMulheres = 0;
    let continuar = true;
    while (continuar) {
        let sexo = prompt("Digite o sexo (M/F):");
        let salario = parseFloat(prompt("Digite o salário:"));
        if (sexo.toLowerCase() === "m") {
            totalHomens += salario;
        } else if (sexo.toLowerCase() === "f") {
            totalMulheres += salario;
        }
        continuar = prompt("Deseja continuar? (S/N)") === "S";
    }
    console.log(`Total de salários pagos aos homens: R$ ${totalHomens.toFixed(2)}`);
    console.log(`Total de salários pagos às mulheres: R$ ${totalMulheres.toFixed(2)}`);
}

// 10. Laço faça enquanto
function laçoEnquanto() {
    let somatorio = 0, menorValor = Infinity, numPares = 0, count = 0;
    let continuar = true;
    while (continuar) {
        let numero = parseInt(prompt("Digite um número:"));
        somatorio += numero;
        if (numero < menorValor) menorValor = numero;
        if (numero % 2 === 0) numPares++;
        count++;
        continuar = prompt("Deseja continuar? (S/N)") === "S";
    }
    let media = somatorio / count;
    console.log(`Somatório: ${somatorio}`);
    console.log(`Menor valor: ${menorValor}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Quantidade de números pares: ${numPares}`);
}

// 11. Progressão Aritmética
function progressaoAritmetica(primeiroTermo, razao) {
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        let termo = primeiroTermo + (i * razao);
        console.log(termo);
        soma += termo;
    }
    console.log(`Soma dos 10 primeiros termos: ${soma}`);
}

// 12. Sequência de Fibonacci
function fibonacci() {
    let a = 1, b = 1;
    console.log(a);
    console.log(b);
    for (let i = 2; i < 10; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

// 13. Preencher vetor com Fibonacci
function fibonacciVetor() {
    let fib = [1, 1];
    for (let i = 2; i < 15; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    console.log(fib);
}

// 14. Nomes em ordem inversa
function nomesEmOrdemInversa() {
    let nomes = [];
    for (let i = 0; i < 7; i++) {
        nomes.push(prompt(`Digite o ${i + 1}º nome:`));
    }
    nomes.reverse();
    console.log(nomes);
}

// 15. Números pares em vetor
function paresEmVetor() {
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(parseInt(prompt("Digite um número:")));
    }
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push({ numero: numeros[i], posicao: i });
        }
    }
    console.log(pares);
}

// 16. Preencher vetor com números aleatórios
function vetorAleatorio() {
    let vetor = [];
    for (let i = 0; i < 20; i++) {
        vetor.push(Math.floor(Math.random() * 100));
    }
    console.log("Vetor original:", vetor);
    vetor.sort((a, b) => a - b);
    console.log("Vetor ordenado:", vetor);
}

// 17. Nome e idade de menores de idade
function menoresDeIdade() {
    let nomes = [], idades = [];
    for (let i = 0; i < 9; i++) {
        nomes.push(prompt(`Digite o nome da pessoa ${i + 1}:`));
        idades.push(parseInt(prompt(`Digite a idade de ${nomes[i]}:`)));
    }
    for (let i = 0; i < 9; i++) {
        if (idades[i] < 18) {
            console.log(`${nomes[i]} - ${idades[i]} anos`);
        }
    }
}

// 18. Escreva um programa que leia uma sequência de números e calcule a soma de todos os
// números digitados, até que o usuário digite o número 0.

function questao18() {
  let soma = 0;
  let numero;
  
  do {
    numero = prompt("Digite um número (ou 0 para sair):");
    numero = Number(numero);
    soma += numero;
  } while (numero !== 0);
  
  console.log("Soma total: " + soma);
}
questao18();

// 19. Escreva um programa que leia 10 números inteiros e calcule a média dos números.

function questao19() {
  let soma = 0;
  
  for (let i = 0; i < 10; i++) {
    let numero = prompt(`Digite o ${i+1}º número inteiro:`);
    soma += Number(numero);
  }
  
  let media = soma / 10;
  console.log("Média dos números: " + media);
}
questao19();

// 20. Faça um programa que leia 10 números inteiros e imprima o maior e o menor número
// digitado.

function questao20() {
  let maior = -Infinity;
  let menor = Infinity;
  
  for (let i = 0; i < 10; i++) {
    let numero = prompt(`Digite o ${i+1}º número inteiro:`);
    numero = Number(numero);
    
    if (numero > maior) maior = numero;
    if (numero < menor) menor = numero;
  }
  
  console.log("Maior número: " + maior);
  console.log("Menor número: " + menor);
}
questao20();

// 21. Escreva um programa que leia um número inteiro e imprima a soma de todos os números
// de 1 até o número informado.

function questao21() {
  let numero = prompt("Digite um número inteiro:");
  numero = Number(numero);
  let soma = 0;

  for (let i = 1; i <= numero; i++) {
    soma += i;
  }

  console.log("Soma dos números de 1 até " + numero + ": " + soma);
}
questao21();

// 22. Escreva um programa que leia um número e imprima os números de 1 até esse número
// que são múltiplos de 3.

function questao22() {
  let numero = prompt("Digite um número inteiro:");
  numero = Number(numero);
  
  console.log("Múltiplos de 3 até " + numero + ":");
  for (let i = 3; i <= numero; i += 3) {
    console.log(i);
  }
}
questao22();

// 23. Escreva um programa que leia uma sequência de números e calcule a quantidade de números
// negativos e positivos digitados, até que o usuário digite o número 0.

function questao23() {
  let positivos = 0;
  let negativos = 0;
  let numero;

  do {
    numero = prompt("Digite um número (ou 0 para sair):");
    numero = Number(numero);

    if (numero > 0) positivos++;
    if (numero < 0) negativos++;
  } while (numero !== 0);

  console.log("Números positivos: " + positivos);
  console.log("Números negativos: " + negativos);
}
questao23();

// 24. Escreva um programa que leia 5 números e calcule a média aritmética deles.

function questao24() {
  let soma = 0;

  for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    soma += Number(numero);
  }

  let media = soma / 5;
  console.log("Média dos números: " + media);
}
questao24();

// 25. Faça um programa que leia 5 números inteiros e imprima a soma de todos os números
// digitados.

function questao25() {
  let soma = 0;

  for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    soma += Number(numero);
  }

  console.log("Soma total dos números: " + soma);
}
questao25();
// 26. Faça um programa que leia um número e imprima a sequência de Fibonacci até o n-ésimo termo.

function questao26() {
  let n = prompt("Digite o número n para a sequência de Fibonacci:");
  n = Number(n);

  let a = 0, b = 1;

  console.log("Sequência de Fibonacci:");
  for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
}
questao26();

// 27. Faça um programa que leia a altura de 10 pessoas e calcule a média de altura.

function questao27() {
  let soma = 0;

  for (let i = 0; i < 10; i++) {
    let altura = prompt(`Digite a altura da ${i + 1}ª pessoa:`);
    soma += Number(altura);
  }

  let media = soma / 10;
  console.log("Média de altura: " + media);
}
questao27();

// 28. Faça um programa que leia 5 números e informe o maior e o menor número.

function questao28() {
  let maior = -Infinity;
  let menor = Infinity;

  for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    numero = Number(numero);

    if (numero > maior) maior = numero;
    if (numero < menor) menor = numero;
  }

  console.log("Maior número: " + maior);
  console.log("Menor número: " + menor);
}
questao28();

// 29. Escreva um programa que leia um número e imprima o seu fatorial.

function questao29() {
  let numero = prompt("Digite um número para calcular o fatorial:");
  numero = Number(numero);

  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  console.log(`Fatorial de ${numero}: ` + fatorial);
}
questao29();
// 30. Escreva um programa que leia 10 números e calcule o somatório de todos os números.

function questao30() {
  let soma = 0;

  for (let i = 0; i < 10; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    soma += Number(numero);
  }

  console.log("Soma total: " + soma);
}
questao30();

// 31. Escreva um programa que leia 10 números e informe quantos são pares e quantos são ímpares.

function questao31() {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < 10; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    numero = Number(numero);

    if (numero % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  console.log("Números pares: " + pares);
  console.log("Números ímpares: " + impares);
}
questao31();
// 32. Faça um programa que leia um número e imprima sua tabuada.

function questao32() {
  let numero = prompt("Digite um número para ver sua tabuada:");
  numero = Number(numero);

  console.log(`Tabuada de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
questao32();

// 33. Escreva um programa que leia 5 números e imprima a média, o maior e o menor número.

function questao33() {
  let soma = 0;
  let maior = -Infinity;
  let menor = Infinity;

  for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    numero = Number(numero);

    soma += numero;

    if (numero > maior) maior = numero;
    if (numero < menor) menor = numero;
  }

  let media = soma / 5;
  console.log("Média: " + media);
  console.log("Maior número: " + maior);
  console.log("Menor número: " + menor);
}
questao33();

// 34. Escreva um programa que leia um número e informe se ele é primo.

function questao34() {
  let numero = prompt("Digite um número para verificar se é primo:");
  numero = Number(numero);

  let isPrimo = true;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      isPrimo = false;
      break;
    }
  }

  if (isPrimo && numero > 1) {
    console.log(`${numero} é um número primo.`);
  } else {
    console.log(`${numero} não é um número primo.`);
  }
}
questao34();

// 35. Faça um programa que leia a idade de uma pessoa e informe se ela é maior de idade ou menor de idade.

function questao35() {
  let idade = prompt("Digite sua idade:");
  idade = Number(idade);

  if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }
}
questao35();

// 36. Escreva um programa que leia a idade de 5 pessoas e calcule quantas são maiores de idade e quantas são menores de idade.

function questao36() {
  let maioresDeIdade = 0;
  let menoresDeIdade = 0;

  for (let i = 0; i < 5; i++) {
    let idade = prompt(`Digite a idade da ${i + 1}ª pessoa:`);
    idade = Number(idade);

    if (idade >= 18) {
      maioresDeIdade++;
    } else {
      menoresDeIdade++;
    }
  }

  console.log("Maiores de idade: " + maioresDeIdade);
  console.log("Menores de idade: " + menoresDeIdade);
}
questao36();

// 37. Faça um programa que leia um número e informe se ele é divisível por 3, 5 ou ambos.

function questao37() {
  let numero = prompt("Digite um número para verificar se é divisível por 3, 5 ou ambos:");
  numero = Number(numero);

  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`${numero} é divisível por 3 e 5.`);
  } else if (numero % 3 === 0) {
    console.log(`${numero} é divisível por 3.`);
  } else if (numero % 5 === 0) {
    console.log(`${numero} é divisível por 5.`);
  } else {
    console.log(`${numero} não é divisível nem por 3 nem por 5.`);
  }
}
questao37();

// 38. Escreva um programa que leia 10 números e imprima a soma de todos os números maiores que 10.

function questao38() {
  let soma = 0;

  for (let i = 0; i < 10; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    numero = Number(numero);

    if (numero > 10) {
      soma += numero;
    }
  }

  console.log("Soma dos números maiores que 10: " + soma);
}
questao38();

// 39. Escreva um programa que leia um número e imprima a sua raiz quadrada.

function questao39() {
  let numero = prompt("Digite um número para calcular a raiz quadrada:");
  numero = Number(numero);

  let raizQuadrada = Math.sqrt(numero);
  console.log("Raiz quadrada de " + numero + ": " + raizQuadrada);
}
questao39();

// 40. Escreva um programa que leia um número e imprima a sequência de Fibonacci até o n-ésimo termo.

function questao40() {
  let n = prompt("Digite o número n para a sequência de Fibonacci:");
  n = Number(n);

  let a = 0, b = 1;

  console.log("Sequência de Fibonacci:");
  for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
}
questao40();

// 41. Escreva um programa que leia 5 números e imprima a soma de todos os números positivos.

function questao41() {
  let soma = 0;

  for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    numero = Number(numero);

    if (numero > 0) {
      soma += numero;
    }
  }

  console.log("Soma dos números positivos: " + soma);
}
questao41();

// 42. Faça um programa que leia um número e informe se ele é par ou ímpar.

function questao42() {
  let numero = prompt("Digite um número para verificar se é par ou ímpar:");
  numero = Number(numero);

  if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
  } else {
    console.log(`${numero} é ímpar.`);
  }
}
questao42();

// 43. Escreva um programa que leia 5 números e calcule o produto de todos os números.

function questao43() {
  let produto = 1;

  for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    numero = Number(numero);

    produto *= numero;
  }

  console.log("Produto de todos os números: " + produto);
}
questao43();

// 44. Faça um programa que leia a altura e o peso de uma pessoa e calcule seu IMC (Índice de Massa Corporal).

function questao44() {
  let altura = prompt("Digite sua altura (em metros):");
  altura = Number(altura);

  let peso = prompt("Digite seu peso (em kg):");
  peso = Number(peso);

  let imc = peso / (altura * altura);
  console.log("Seu IMC é: " + imc);
}
questao44();

// 45. Escreva um programa que leia 5 números e calcule a soma dos números negativos.

function questao45() {
  let soma = 0;

  for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    numero = Number(numero);

    if (numero < 0) {
      soma += numero;
    }
  }

  console.log("Soma dos números negativos: " + soma);
}
questao45();

// 46. Faça um programa que leia um número e imprima a sequência de Fibonacci até o n-ésimo termo, mas só imprima números maiores que 10.

function questao46() {
  let n = prompt("Digite o número n para a sequência de Fibonacci:");
  n = Number(n);

  let a = 0, b = 1;

  console.log("Sequência de Fibonacci (maiores que 10):");
  for (let i = 0; i < n; i++) {
    if (a > 10) {
      console.log(a);
    }
    let temp = a;
    a = b;
    b = temp + b;
  }
}
questao46();

// 47. Escreva um programa que leia 10 números e imprima quantos números são negativos.

function questao47() {
  let negativos = 0;

  for (let i = 0; i < 10; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    numero = Number(numero);

    if (numero < 0) {
      negativos++;
    }
  }

  console.log("Quantidade de números negativos: " + negativos);
}
questao47();
// 48. Faça um programa que leia a idade de uma pessoa e informe se ela pode votar (idade >= 16).

function questao48() {
  let idade = prompt("Digite sua idade:");
  idade = Number(idade);

  if (idade >= 16) {
    console.log("Você pode votar.");
  } else {
    console.log("Você não pode votar.");
  }
}
questao48();

// 49. Escreva um programa que leia a altura e o peso de uma pessoa e calcule seu IMC (Índice de Massa Corporal) e informe se ela está abaixo do peso, com peso normal, sobrepeso ou obesa.

function questao49() {
  let altura = prompt("Digite sua altura (em metros):");
  altura = Number(altura);

  let peso = prompt("Digite seu peso (em kg):");
  peso = Number(peso);

  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    console.log("Você está abaixo do peso.");
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Você está com o peso normal.");
  } else if (imc >= 25 && imc <= 29.9) {
    console.log("Você está com sobrepeso.");
  } else {
    console.log("Você está obeso.");
  }
}
questao49();

// 50. Escreva um programa que leia 10 números e imprima o maior número digitado.

function questao50() {
  let maior = -Infinity;

  for (let i = 0; i < 10; i++) {
    let numero = prompt(`Digite o ${i + 1}º número:`);
    numero = Number(numero);

    if (numero > maior) {
      maior = numero;
    }
  }

  console.log("Maior número digitado: " + maior);
}
questao50();
