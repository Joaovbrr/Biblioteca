function adicionarLivro(titulo, autor, assunto, imagem) {
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    livros.push({ titulo, autor, assunto, imagem });
    localStorage.setItem('livros', JSON.stringify(livros));
}


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

function exibirLivros() {
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    const colecao = document.querySelector('.books-container');

    // Evita sobrescrever as imagens fixas
    const livrosDinamicos = document.querySelectorAll('.book-item');
    livrosDinamicos.forEach(livro => livro.remove());

    livros.forEach((livro, index) => {
        const div = document.createElement('div');
        div.className = 'book-item';  // Cria uma classe para os itens dinâmicos
        div.innerHTML = `
            <img src="${livro.imagem}" alt="${livro.titulo}">
            <p>${livro.titulo}</p>
            <p>Autor: ${livro.autor}</p>
            <p>Categoria: ${livro.assunto}</p>
            <button onclick="removerLivro(${index})">Remover</button>
        `;
        colecao.appendChild(div); // Adiciona os livros dinamicamente sem limpar o conteúdo fixo
    });
}

// Função para remover um livro do localStorage
function removerLivro(index) {
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    livros.splice(index, 1); // Remove o livro no índice especificado
    localStorage.setItem('livros', JSON.stringify(livros));
    exibirLivros(); // Atualiza a exibição dos livros
}

window.onload = function() {
    exibirLivros();
};