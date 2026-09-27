document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();
});

function fetchBooks() {
    fetch('http://localhost:3000/api/books')
        .then(response => response.json())
        .then(data => {
            const booksDiv = document.getElementById('books');
            booksDiv.innerHTML = data.map(book => `<p>${book.title} by ${book.author}</p>`).join('');
            // put your code in here
        })
        .catch(error => console.error('Error fetching books:', error));
}