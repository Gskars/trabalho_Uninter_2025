// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    /* --- FUNCIONALIDADE 1: TEMA CLARO/ESCURO  --- */
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeBtn.addEventListener('click', () => {
        // Alterna a classe 'dark-mode' no body
        body.classList.toggle('dark-mode');

        // Altera o texto do botão conforme o tema atual
        if (body.classList.contains('dark-mode')) {
            themeBtn.textContent = '☀️ Claro';
        } else {
            themeBtn.textContent = '🌙 Escuro';
        }
    });

    /* --- FUNCIONALIDADE 2: VALIDAÇÃO DE FORMULÁRIO [cite: 58, 59, 60] --- */
    const form = document.getElementById('form-contato');

    form.addEventListener('submit', (event) => {
        // Impede o envio padrão do formulário (recarregar a página)
        event.preventDefault();

        // Captura os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // 1. Validação de campos vazios
        if (nome === '' || email === '' || mensagem === '') {
            alert('Erro: Por favor, preencha todos os campos obrigatórios.');
            return; // Para a execução aqui
        }

        // 2. Validação de formato de e-mail (Regex simples)
        // Verifica se tem texto + @ + texto + . + texto
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Erro: Por favor, insira um endereço de e-mail válido (ex: nome@dominio.com).');
            return;
        }

        // 3. Simulação de envio com sucesso
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\n(Isto é apenas uma simulação)`);

        // Limpa o formulário após o "envio"
        form.reset();
    });
});