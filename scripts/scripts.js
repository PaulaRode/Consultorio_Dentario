// Aplica rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Validação simples do formulário
document.querySelector('form').addEventListener('submit', function (e) {
  const nome = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const msg = this.querySelector('textarea').value.trim();

  if (!nome || !email || !msg) {
    e.preventDefault();
    alert('Por favor, preencha todos os campos.');
  }
});

// Exibe uma mensagem de agradecimento ao enviar o formulário
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-contato');
  const msg = document.getElementById('mensagem-sucesso');

  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // impede o envio real
      msg.style.display = 'block'; // mostra a mensagem
      form.reset(); // limpa o formulário
      setTimeout(() => {
        msg.style.display = 'none'; // esconde após 3 segundos
      }, 3000);
    });
  }
});