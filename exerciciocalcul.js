const prompt = require("prompt-sync")();

function calcular() {
    let operacao = prompt('Escolha uma operação: +, -, *, /, % ou digite "sair" para encerrar: ');
    
 
    if (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/" && operacao !== "%" && operacao.toLowerCase() !== "sair") {
        console.log('Operação inválida!');
        calcular(); 
        return; 
    }
    
    if (operacao.toLowerCase() === "sair") {
        console.log('Encerrando o programa...');
        return;
    }

    let num1 = parseFloat(prompt('Digite o primeiro número: '));
    let num2 = parseFloat(prompt('Digite o segundo número: '));

    let resultado;

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '%':
            resultado = (num1 * num2) / 100;
            break;
        default:
            console.log('Operação inválida!');
            return; 
    }

    console.log(`O resultado de ${num1} ${operacao} ${num2} é ${resultado}`);
    

    let continuar = prompt('Deseja realizar outra operação? (sim/não): ');
    if (continuar.toLowerCase() === 'sim') {
        calcular(); 
    } else {
        console.log('Encerrando o programa...');
    }
}

calcular();

