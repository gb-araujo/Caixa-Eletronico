var usuario = String(prompt("Olá, qual seu nome? "));
alert(`Olá ${usuario} é um prazer ter você por aqui!`)
var saldo = 100.5; 

inicio();


function senha(){
let senha = Number(prompt("Digite sua senha: "));
    if (senha == 3589){
        return true;
    } else {
        alert("Senha inválida");
        return false;
    }
}

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
    if (senha(true)) {
    alert('Seu saldo atual é: ' + saldo);  
    inicio()  
    }
    else {
        inicio()
    };
}

function fazer_deposito() {
if (senha(true)) {
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
else {
    alert("senha inválida");
inicio()};
}

function fazer_saque() {
    if (senha(true)) {
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
    }else {
        alert("senha inválida");
    inicio()
    };
}

function erro() {
    
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function transferencia(){
    if (senha(true)) {
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
    else {
        inicio()
    };
}

function extrato() {
    if (senha(true)) {
    let opcao = parseInt(prompt("Extrato: \n1- Histórico \n 2- Valor da fatura \n 3- Sair "))
    switch(opcao){
        case 1: 
            alert("Item: Camiseta branca, Loja: Hering, Preço: R$ 50,00, Data da compra: 15/02/2022 \nItem: Tênis de corrida, Loja: Nike,Preço: R$ 250,00,Data da compra: 03/03/2022");
            break;
        case 2:
            alert(`A fatura atual está no valor de 300R$`);
            break;
        case 3:
            sair();
            break;
    }
}
else {
    inicio()
};
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`${usuario} obrigado por utilizar nossos serviços!`)
        window.close();
    } else {
        inicio();
    }
}