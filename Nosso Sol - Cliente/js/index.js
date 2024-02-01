document.addEventListener('DOMContentLoaded', function () {
    // Campo Nome
    var campoNome = document.querySelector('.inp-nome');
    campoNome.addEventListener('input', function (event) {
        var valorAtual = campoNome.value;
        var valorSemNumeros = valorAtual.replace(/[0-9]/g, '');
        campoNome.value = valorSemNumeros;
    });

    // Campo CPF
    var campoCPF = document.querySelector('.inp-cpf');
    campoCPF.addEventListener('input', function (event) {
        var valorAtual = campoCPF.value;
        var valorNumerico = valorAtual.replace(/\D/g, '');
        valorNumerico = valorNumerico.slice(0, 11);
        var cpfFormatado = valorNumerico.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        campoCPF.value = cpfFormatado;
    });

    // Campo RG
    var campoRG = document.querySelector('.inp-rg');
    campoRG.addEventListener('input', function (event) {
        var valorAtual = campoRG.value;
        var valorSemLetras = valorAtual.replace(/\D/g, '');
        campoRG.value = valorSemLetras;
    });

    // Senha e Csenha
    var senhaInput = document.querySelector('.inp-senha');
    var csenhaInput = document.querySelector('.inp-csenha');

    // Adicionando evento ao botão
    var botaoEntrar = document.querySelector('button');
    botaoEntrar.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do clique no botão

        if (camposObrigatoriosPreenchidos() && verificarSenhas() && verificarCPF()) {
            window.location.href = "../Nosso Sol - Futuro/index.html";
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    // Função para verificar CPF
    function verificarCPF() {
        var campoCPF = document.querySelector('.inp-cpf');
        var cpf = campoCPF.value.replace(/\D/g, '');

        if (cpf.length === 11) {
            return true;
        } else {
            alert('Por favor, insira um CPF válido com 11 dígitos.');
            return false;
        }
    }

    // Função para verificar se senhas coincidem
    function verificarSenhas() {
        var senha = senhaInput.value;
        var confirmaSenha = csenhaInput.value;

        if (senha === confirmaSenha && senha.trim() !== '') {
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
