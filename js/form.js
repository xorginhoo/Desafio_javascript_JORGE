//class contato
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
}

function Post(form) {

    event.preventDefault();

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );

    let dadosUsuario = {
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        cpf: data.cpf,
        telefone: data.telefone,
        tipoContato: data.tipoContato
    }

    console.log("=== Dados capturados do Formulário ===");
    console.log(dadosUsuario);

    Enviar();

    form.reset();

}


function Enviar() {
    var nome = document.getElementById("nomeid");

    if (nome && nome.value.trim() !== "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        return true;
    } else {
        alert("Por favor, preencha o nome antes de enviar.");
        return false;
    }
}
