// Exemplo de array de livros
let livros = [
    { titulo: "Técnicas de Culinária", autor: "Autor do Livro" },
    { titulo: "Minha Receita", autor: "Autor do Livro" },
    { titulo: "Receitas do Mar", autor: "Autor do Livro" },
    { titulo: "Panelinha", autor: "Autor do Livro" },
    { titulo: "Admirável Mundo Novo", autor: "Autor do Livro" },
    { titulo: "Duna", autor: "Autor do Livro" },
    { titulo: "Fahrenheit 451", autor: "Autor do Livro" },
    { titulo: "Frankenstein", autor: "Autor do Livro" },
    { titulo: "Algoritmos e Lógica da Programação", autor: "Autor do Livro" },
    { titulo: "Aprendendo a Aprender", autor: "Autor do Livro" },
    { titulo: "As Armas da Persuasão", autor: "Autor do Livro" },
    { titulo: "Caderno de Exercícios", autor: "Autor do Livro" }
];

// Função para popular os select do formulário de aluguel
function popularSelectLivros() {
    const select = document.getElementById('livro');
    const selectDevolver = document.getElementById('livro-devolver');

    livros.forEach((livro, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = livro.titulo;
        select.appendChild(option);
        
        const optionDevolver = document.createElement('option');
        optionDevolver.value = index;
        optionDevolver.textContent = livro.titulo;
        selectDevolver.appendChild(optionDevolver);
    });
}

// Evento de submit do formulário de aluguel
document.getElementById('form-alugar').addEventListener('submit', function(e) {
    e.preventDefault();
    // Implementar a lógica para registrar o aluguel
    alert('Livro alugado com sucesso!');
});

// Evento de submit do formulário de devolução
document.getElementById('form-devolver').addEventListener('submit', function(e) {
    e.preventDefault();
    // Implementar a lógica para registrar a devolução
    alert('Livro devolvido com sucesso!');
});

// Chama a função ao carregar a página
window.onload = function() {
    popularSelectLivros();
};
