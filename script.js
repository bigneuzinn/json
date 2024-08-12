function EnviarFormulario() {
    //Capturar os valores e criar a variavel para o objeto (JSON)
    var contaCliente = new Object();

    contaCliente.nome = document.getElementById("nome").value;
    contaCliente.agencia = document.getElementById("agencia").value;
    contaCliente.conta = document.getElementById("conta").value;

    //Converter para String JSON
    var json = JSON.stringify(contaCliente)

    console.log(json)
    console.log(contaCliente.valueOf())

}