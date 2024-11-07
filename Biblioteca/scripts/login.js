// scripts/login.js

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    // Simulação de usuários (no lugar de um banco de dados)
    const users = {
        aluno1: { type: 'aluno', password: 'senhaAluno1' },
        professor1: { type: 'professor', password: 'senhaProfessor1' },
        admin: { type: 'admin', password: 'senhaAdmin' }
    };

    // Verificando se o usuário existe e se a senha está correta
    if (user in users && users[user].password === password) {
        alert(`Bem-vindo, ${users[user].type}!`); // Mensagem de boas-vindas
        
        // Redirecionando com base no tipo de usuário
        if (users[user].type === 'admin') {
            window.location.href = '../pages/adimin.html'; // Redirecionar para a página do administrador
        } else {
            window.location.href = '../pages/livros.html'; // Redirecionar para a página do usuário (aluno ou professor)
        }
    } else {
        alert('Usuário ou senha inválidos!');
    }
});
