const btnCalcular = document.getElementById('btnCalcular');
const btnLimparCampos = document.getElementById('btnLimpar');

console.log(btnLimparCampos);

function checarValores(...args){
    return args ? true:false;
}

function classificarIMC(imc){
    let detalhe='';
    if(imc<18.5){
        detalhe = 'Abaixo do peso';
    }
    else if(imc>=18.5 & imc<25){
        detalhe = 'Peso normal';
    }
    else if(imc>=25 & imc<30){
        detalhe = 'Sobrepeso';
    }
    else if(imc>=30 & imc<40){
        detalhe = 'Obesidade';
    }
    else{
        detalhe = 'Obesidade grave';
    }
    return detalhe;
}

//peso divido pela altura ao quadrado 
function calcularIMC(){
    let peso = parseInt(document.querySelector('#peso').value);
    let altura = parseFloat(document.querySelector('#altura').value);

    console.log(checarValores(peso, altura));
    if(checarValores(peso, altura)){
        let sqrtAltura = altura*altura;
        let imc = (peso/sqrtAltura).toPrecision(4);
        let resultado = document.querySelector('#resultado');
        resultado.textContent = 'Seu IMC é:'+ imc + '-' + classificarIMC(imc);
    }
    else{
        resultado.textContent = 'Calcule seu IMC';
    }
}

function LimparCampos(){
    let peso = document.querySelector('#peso');
    let altura = document.querySelector('#altura');
    peso.value = '';
    altura.value = '';
}

btnCalcular.addEventListener('click', calcularIMC);
btnLimparCampos.addEventListener('click', LimparCampos);