const prompt = require("prompt-sync")()


function calcular(){

    let operacao = prompt('escolha uma operação: +, -, *, / , % ');
    if ( operacao != "+" && operacao != "-" && operacao != "*" && operacao != "/" && operacao != "%"){
        console.log('operaçaõ inválida!');
    }

let num1 = parseFloat(prompt('digite o primeiro numero:'));
let num2 = parseFloat(prompt('digite o segundo numero:'));

let resultado;

switch(operacao){
        case '+':
            resultado = (num1 , num2){
                console.log("num1 + num2")
            }
            break;
            case '-':
                
                resultado = (num1 , num2){
                console.log("num1 - num2")
            }
            break;
        case '*':
            resultado = (num1 , num2){

                console.log("num1 * num2")
            }
            break;
            
            case '/':
                resultado = (num1 , num2){

                }
                break;
                console.log("num1 / num2")
                case '%':
                    resultado = (num1 , num2){

                    }
                    console.log("num1 % num2")
                    break;
            resultado = (num1 * num2)/ 100;
                  break;
                  default:
                    alert('operação invalida!');
               return;
}
               alert(`ò resultado de ${num1} ${operação} ${num2} é ${resultado}`);

               calcular();
    }



