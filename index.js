
// - Ao acessar o sistema, pergunte o nome do usuário e diga "Olá {Nome} é um prazer ter você por aqui!".
var usuario = String(prompt("Olá, qual seu nome? "));
var senha = parseInt(prompt("Digite sua senha: "));

if (senha == 3589){
    alert(`Olá ${usuario} é um prazer ter você por aqui!`)
    inicio();
} else {
    alert("Senha inválida.")
    window.close()
}
var saldo = 100.5; //Float
function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção \n1.) Saldo \n2.) Extrato \n3.) Saque \n4.) Deposito \n5.) Transferência \n6.) Sair.'));
    switch (escolha) {
        case 1:
            ver_saldo();
            break;
        case 2:
            extrato();
            break;
        case 3: 
            fazer_saque();
            break;
        case 4:
            fazer_deposito();
            break;
        case 5:
            transferencia();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
            break;
    }
}		

function ver_saldo() {
    alert('Seu saldo atual é: ' + saldo);
    inicio();
}

function fazer_deposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    // Not a Number
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número:');
        fazer_deposito();
    } 
    else if (deposito <= 0){
        alert("Operação não autorizada.")
    }
    else {
        saldo += deposito;
        ver_saldo();
    }
}

function fazer_saque() {
    var saque = parseFloat(prompt('Qual o valor para saque?'));
    if (isNaN(saque) || saque === '') {
        alert('Por favor, informe um número:');
        fazer_saque();
    } 
    else if (saque > saldo){
        alert("Operação não autorizada, saldo insuficiente.")
    }
    else if (saque <= 0){
        alert("Operação não autorizada, digite um valor válido.")
    }
    else {
        saldo -= saque;
        ver_saldo();
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function transferencia(){
    let destino = Number(prompt("Digite o número da conta que você deseja transferir: "));
    let valor_transfer = Number(prompt("Digite o valor que deseja transferir: "));
    if (valor_transfer > saldo) {
        alert("Você não tem saldo suficiente.")
        transferencia();
    }
    else if (valor_transfer <= 0){
        alert("Valor inválido.")
    }
    else if (destino <= 0){
        alert("Erro, tente novamente.")
        transferencia();
    }
    else {
        saldo = saldo - valor_transfer;
        alert(`A transferência foi feita, seu saldo atual é de ${saldo}`)
        transferencia();
    }
}

function extrato() {
    let opcao = parseInt(prompt("Extrato: \n1- Histórico \n 2- Valor da fatura \n 3- Sair "))
    switch(opcao){
        case 1: 
            alert("Item: Camiseta branca, Loja: Hering, Preço: R$ 50,00, Data da compra: 15/02/2022 \nItem: Tênis de corrida, Loja: Nike,Preço: R$ 250,00,Data da compra: 03/03/2022");
            break;
        case 2:
            alert("A fatura atual está no valor de 300R$.");
            break;
        case 3:
            sair();
            break;
    }
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        window.close();
    } else {
        inicio();
    }
}
