document.addEventListener('DOMContentLoaded', function () {
    // Campo Razão
    var campoRazao = document.querySelector('.inp-razao');
    campoRazao.addEventListener('input', function (event) {
        var valorAtual = campoRazao.value;
        var valorSemNumerosSimbolos = valorAtual.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ]/g, '');
        campoRazao.value = valorSemNumerosSimbolos;
    });

    // Campo CNPJ
    var campoCNPJ = document.querySelector('.inp-cnpj');
    campoCNPJ.addEventListener('input', function (event) {
        var valorAtual = campoCNPJ.value;
        var valorNumerico = valorAtual.replace(/\D/g, '');
        valorNumerico = valorNumerico.slice(0, 14);
        var cnpjFormatado = valorNumerico.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        campoCNPJ.value = cnpjFormatado;
    });

    // Campo Endereço
    var campoEndereco = document.querySelector('.inp-end');
    campoEndereco.addEventListener('input', function (event) {
        // Implemente a lógica desejada para o campo de Endereço, se necessário
    });

    // Campo Email
    var campoEmail = document.querySelector('.inp-email');
    campoEmail.addEventListener('input', function (event) {
        // Implemente a lógica desejada para o campo de Email, se necessário
    });

    // Senha e Csenha
    var senhaInput = document.querySelector('.inp-senha');
    var csenhaInput = document.querySelector('.inp-csenha');

    // Adicionando evento ao botão
    var botaoEntrar = document.querySelector('button');
    botaoEntrar.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do clique no botão

        if (camposObrigatoriosPreenchidos() && verificarSenhas() && verificarCNPJ()) {
            window.location.href = "../Nosso Sol - Futuro/index.html";
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    // Função para verificar CNPJ
    function verificarCNPJ() {
        var campoCNPJ = document.querySelector('.inp-cnpj');
        var cnpj = campoCNPJ.value.replace(/\D/g, '');

        if (cnpj.length === 14) {
            return true;
        } else {
            alert('Por favor, insira um CNPJ válido com 14 dígitos.');
            return false;
        }
    }

    // Função para verificar se senhas coincidem
    function verificarSenhas() {
        var senha = senhaInput.value;
        var confirmaSenha = csenhaInput.value;

        if (senha === confirmaSenha) {
            csenhaInput.value = '';
            csenhaInput.classList.remove('senha-error');
            senhaInput.type = 'password'; // Reinicia o tipo do campo de senha
            return true;
        } else {
            csenhaInput.value = '';
            csenhaInput.placeholder = 'Senhas não correspondem.';
            csenhaInput.classList.add('senha-error');
            senhaInput.type = 'text';

            setTimeout(function () {
                senhaInput.type = 'password';
                csenhaInput.placeholder = '';
            }, 5000);

            return false;
        }
    }

    // Função para verificar se todos os campos obrigatórios estão preenchidos
    function camposObrigatoriosPreenchidos() {
        var campos = document.querySelectorAll('input[required]');
        for (var i = 0; i < campos.length; i++) {
            if (!campos[i].value.trim()) {
                return false;
            }
        }
        return true;
    }
});
