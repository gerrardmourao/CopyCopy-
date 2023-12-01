// Seleciona o botão de alternar tema, o corpo do documento e a classe de tema no botão
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;
const themeToggleBtnClass = document.querySelector('.theme-toggle-btn');

// Adiciona um ouvinte de eventos ao botão de alternar tema
themeToggleBtn.addEventListener('click', () => {
  // Verifica o estilo atual do corpo
  if (body.classList.contains('theme-light')) {
    // Se o tema atual for claro, mude para o tema escuro
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    // Atualiza o texto do botão
    themeToggleBtnClass.innerText = 'Tema Claro';
  } else {
    // Caso contrário, mude para o tema claro
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    // Atualiza o texto do botão
    themeToggleBtnClass.innerText = 'Tema Escuro';
  }
});

// Carrega o tema padrão (claro ou escuro) com base nas preferências do usuário ou padrão do sistema
if (window.matchMedia('(prefers-color-scheme: )').matches) {
  body.classList.add('theme-dark');
  themeToggleBtnClass.innerText = 'Escolha o tema light';
} else {
  body.classList.add('theme-light');
  themeToggleBtnClass.innerText = 'Tema Escuro';
}