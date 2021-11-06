function pegaNum(numero) {
    let num = document.querySelector('.resUm').innerHTML;
    document.querySelector('.resUm').innerHTML = num + numero;
}

function tiraNum() {
    document.querySelector('.resUm',).innerHTML = '';
    document.querySelector('.resDois').innerHTML = '';
}

function tiraUm() {
    let resUm = document.querySelector('.resUm').innerHTML;
    document.querySelector('.resUm').innerHTML = resUm.substring(0, resUm.length -1);
}

function operacao() {
    let resUm = document.querySelector('.resUm').innerHTML;
    if (resUm.length <= 0 || resUm.length <= 2) {
        document.querySelector('.resUm').innerHTML = 'Operação inválida';
    } else {
        document.querySelector('.resDois').innerHTML = eval(resUm);
    }
}