let x = 40;
let y = 10;

function calcPct(x, y){
    let pct = (y / x) * 100;
    return pct;
}

let pct = calcPct(x, y);

console.log(`${pct}% de ${x} é ${y}`)


// calcular valor do imovel

function calcularImovel(metragem, quartos){
    let m2 = 3000;
    let preco = 0;
    
    if(quartos == 1){
        preco = metragem  * m2;
    } else if(quartos == 2){
        preco = metragem * (1.2 * m2);
    } else if(quartos == 3){
        preco = metragem * (1.5 * m2);
    } 

    return preco
}


let metragem = 123;
let quartos = 3;


let precoImovel = calcularImovel(metragem,quartos);

console.log(`O preço do imóvel é R$ ${precoImovel}.`);


function validar(usuario, senha){
    if(usuario === 'pedro' && senha ==='123'){
        return true;
    } else{
        return false
    }
}

let usuario = 'pedro';
let senha = '1234';
let validacao = validar(usuario, senha);

if(validacao){
    console.log('Acesso concedido');
}else{
    console.log('ACESSO NEGADO!!!');
}