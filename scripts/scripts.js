// Inicialização do EmailJS
(function () {
  emailjs.init("ZUT0iRDKIF_YjmkVE"); // substitua por sua chave real se necessário
})();

// Rolagem suave para links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu-nav').querySelector('ul');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('ativo');
    });
  }

  // Formulário
  const form = document.getElementById("form-contato");
  const toast = document.getElementById("toast");

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validação simples
      const nome = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const msg = form.querySelector('textarea[name="message"]').value.trim();

      if (!nome || !email || !msg) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      // Preencher campo oculto com data e hora formatada corretamente
      const agora = new Date();

      const dia = String(agora.getDate()).padStart(2, '0');
      const mes = String(agora.getMonth() + 1).padStart(2, '0');
      const ano = agora.getFullYear();

      const hora = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');

      const dataHoraFormatada = `${dia}/${mes}/${ano} às ${hora}:${minutos}`;

      const tempoInput = document.getElementById("tempo");
      if (tempoInput) {
        tempoInput.value = dataHoraFormatada;
      }

      // Envio com EmailJS
      emailjs.sendForm('service_msag1qq', 'template_xisqvqp', form)
        .then(() => {
          toast.classList.add("show");
          form.reset();
          setTimeout(() => {
            toast.classList.remove("show");
          }, 4000);
        })
        .catch((error) => {
          alert("Erro ao enviar mensagem. Tente novamente.");
          console.error('Erro EmailJS:', error);
        });
    });
  }
});

// Botão "Voltar ao topo"
const btnTopo = document.getElementById("btn-topo");

window.onscroll = function () {
  if (btnTopo) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  }
};

if (btnTopo) {
  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
