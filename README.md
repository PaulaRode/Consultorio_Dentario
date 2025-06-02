# Projeto Sorriso Perfeito - Landing Page

## Sobre o Projeto

A **Sorriso Perfeito** é uma clínica odontológica fictícia. Este projeto consiste em criar uma landing page responsiva, moderna e funcional para divulgar seus serviços, depoimentos de clientes e facilitar o contato com potenciais pacientes. 

## Tecnologias
Este projeto foi desenvolvido utilizando **HTML5**, **CSS3** e **JavaScript** e serve como base para futura integração com **PHP**.

---

## Visão Geral

### Estrutura do Projeto

- **Home**: Boas-vindas e apresentação do slogan.
- **Sobre Nós**: Informações sobre a missão e propósito do consultório.
- **Serviços**: Lista com imagens dos principais tratamentos (clareamento, implante, aparelho, limpeza).
- **Galeria de Sorrisos**: Imagens fictícias de pacientes satisfeitos.
- **Depoimentos**: Avaliações simuladas de pacientes.
- **Contato**: Formulário de envio com integração ao **EmailJS**.
- **Rodapé**: Contato, redes sociais e direitos autorais.
- **Botão “Voltar ao Topo”**: Facilita a navegação.
- **Toast de Sucesso**: Mensagem temporária após envio do formulário.

---

## Pré-requisitos

- [Git](https://git-scm.com/) instalado
- Navegador moderno (Chrome, Firefox, etc.)
- Editor de código como **Visual Studio Code**
- Conexão com a internet (para carregar recursos como Font Awesome, Google Fonts e EmailJS)

---

## Tecnologias Utilizadas

- **HTML5**: Estruturação semântica da página
- **CSS3**: Estilização com layout responsivo (media queries)
- **JavaScript (Vanilla)**:
  - Validação e envio do formulário via EmailJS
  - Navegação suave entre seções
  - Toast de feedback
  - Botão voltar ao topo
- **Google Fonts (Roboto)**: Tipografia moderna
- **Font Awesome**: Ícones para redes sociais e botões
- **EmailJS**: Envio de e-mail sem backend

---

## Estrutura de Pastas

```plaintext
/projeto-sorriso-perfeito
│
├── index.html            # Página principal do site
├── styles/
│   └── style.css         # Estilização da interface
├── scripts/
│   └── script.js         # Lógica de interatividade e envio de formulário
├── assets/
│   ├── img/              # Imagens da galeria, logotipo e serviços
│   └── fonts/            # Fontes externas
└── README.md             # Documentação do projeto

🔐 Segurança:
Este projeto restringe o uso do EmailJS ao domínio do GitHub Pages configurado, prevenindo uso não autorizado das credenciais públicas.
