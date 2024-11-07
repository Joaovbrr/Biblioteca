// Função para adicionar um novo livro ao LocalStorage
function adicionarLivro(titulo, autor, assunto, imagem) {
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    const novoLivro = {
        id: Date.now(), // Gera um ID único usando o timestamp
        titulo,
        autor,
        assunto,
        imagem
    };
    livros.push(novoLivro);
    localStorage.setItem('livros', JSON.stringify(livros));
    exibirLivros(); // Atualiza a exibição dos livros dinâmicos
}

// Função para exibir os livros dinâmicos sem remover os fixos
function exibirLivros() {
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    const colecao = document.querySelector('.books-container');

    // Remove apenas os livros dinâmicos (classe .book-item), mantendo os fixos (classe .book-fixed)
    const livrosDinamicos = document.querySelectorAll('.add-book');
    livrosDinamicos.forEach(livro => livro.remove());

    // Adiciona os livros dinamicamente
    livros.forEach(livro => {
        const div = document.createElement('div');
        div.className = 'book-fixo';
        div.innerHTML = `
            <img src="${livro.imagem}" alt="${livro.titulo}">
            <p>Título: ${livro.titulo}</p>
            <p>Autor: ${livro.autor}</p>
            <p>Categoria: ${livro.assunto}</p>
            <button onclick="removerLivro(${livro.id})">Remover</button>
        `;
        colecao.appendChild(div); // Adiciona os livros dinâmicos sem limpar os livros fixos
    });
}

// Função para remover um livro dinâmico do LocalStorage
function removerLivro(id) {
    let livros = JSON.parse(localStorage.getItem('livros')) || [];
    livros = livros.filter(livro => livro.id !== id); // Remove o livro com o ID especificado
    localStorage.setItem('livros', JSON.stringify(livros));
    exibirLivros(); // Atualiza a exibição dos livros
}

// Evento de submit do formulário para adicionar um livro
document.getElementById('add-book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const assunto = document.getElementById('assunto').value;
    const imagem = document.getElementById('imagem').files[0];

    const reader = new FileReader();
    reader.onloadend = function() {
        adicionarLivro(titulo, autor, assunto, reader.result);
        alert('Livro adicionado com sucesso!');
        document.getElementById('add-book-form').reset();
    };

    if (imagem) {
        reader.readAsDataURL(imagem);   
    }
});

// Exibe os livros dinâmicos ao carregar a página
window.onload = function() {
    exibirLivros();
};
