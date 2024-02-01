document.getElementById('cpfCnpjInput').addEventListener('input', function() {
    let inputValue = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Limita o número de caracteres para 14 (11 para CPF e 14 para CNPJ)
    inputValue = inputValue.slice(0, 14);

    if (inputValue.length <= 11) { // Se for um CPF
        inputValue = inputValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else { // Se for um CNPJ
        inputValue = inputValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    this.value = inputValue;
});

document.querySelector('button').addEventListener('click', function(event) {
    // Obtém os valores dos campos
    let cpfCnpjValue = document.getElementById('cpfCnpjInput').value;
    let senhaValue = document.querySelector('.inp-pass').value;

    // Remove não numéricos para contar os dígitos
    let numericValue = cpfCnpjValue.replace(/\D/g, '');

    // Verifica se ambos os campos estão preenchidos e se CPF/CNPJ tem o número correto de dígitos
    if (cpfCnpjValue.trim() === '' || senhaValue.trim() === '' || (numericValue.length !== 11 && numericValue.length !== 14)) {
        alert('Por favor, preencha CPF/CNPJ corretamente e todos os campos.');
        event.preventDefault(); // Impede o comportamento padrão (navegar para outra página)
    } else {
        // Os campos estão preenchidos e CPF/CNPJ tem a quantidade correta de dígitos, permitindo o redirecionamento
        window.location.href = '../Nosso Sol - Futuro/index.html';
    }
});
