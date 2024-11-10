let reservasFeitas = []; // array para armazenar as reservas feitas

function realizarReserva() {
     nome = document.getElementById("nome").value;
     email = document.getElementById("email").value;
     telefone = document.getElementById("telefone").value;
     data = new Date(document.getElementById("data").value);

    //  validação básica
    if (!nome || !email || !telefone || !data-time) {
        alert("Preencha todos os campos solicitados!");
        return;
    }

    // criando objeto para reserva
    const novaReserva = {
        nome, 
        email, 
        telefone, 
        data
    };

    reservasFeitas.push(novaReserva);

// exibindo a mensagem de sucesso da reserva

    alert("Olá, " + nome + " \n seu email é: " + email + " \n seu telefone é " + telefone + "\n a data e o horário são: " + data + "\n sua reserva foi concluida com sucesso, Bom proveito !!!!!!!!");

}

function exibirHistorico() { 
    let historico = "";
    reservasFeitas.forEach((reserva, index) => {
        historico += `\nReserva: ${index + 1}\n`;
        historico += `Nome: ${reserva.nome}\n`;
        historico += `Email: ${reserva.email}\n`;
        historico += `Telefone: ${reserva.telefone}\n`;
        historico += `Data: ${reserva.data}\n`;
    });

    alert(historico);
}
