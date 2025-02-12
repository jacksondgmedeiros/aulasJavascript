// condicional ternário
let isMember = true;

let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Você é membro': 'Você não é membro');

console.log(`Frete: ${shipping}`);

let age = 90;

// é possível criar a condição igual em ifs normais
let isAdult = (age >= 18 ? "Adulto" : "Criança");
console.log(isAdult);


let profession = "fiscal";
switch (profession) {
    case "fiscal":
        console.log("Sua camisa é VERDE");
        break;
    case "bombeiro":
        console.log("Sua camisa é VERMELHA");
        break;
    case "policial":
        console.log("Sua camisa é AZUL");
        break;
    default:
        console.log("Sua camisa será por padrão PRETA");
        break;
}