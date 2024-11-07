document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const query = document.getElementById('search-query').value.toLowerCase();
    const bookItems = document.querySelectorAll('.book-item');
    let found = false;

    bookItems.forEach(function(bookItem) {
        const altText = bookItem.querySelector('img').alt.toLowerCase();
        if (altText.includes(query)) {
            bookItem.style.display = 'block'; // Mostra o livro
            found = true;
        } else {
            bookItem.style.display = 'none'; // Esconde os livros que não correspondem
        }
    });

    if (!found) {
        alert('Nenhum livro encontrado com esse nome.');
    }
});
