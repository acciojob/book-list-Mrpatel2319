//your JS code here. If required.
// Event listener for form submission
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get input field values
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const isbn = document.getElementById('isbn').value.trim();

    // Validate input fields
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Create a new row in the table
    const bookList = document.getElementById('book-list');
    const newRow = document.createElement('tr');

    // Add columns with input data and a delete button
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Append the new row to the table
    bookList.appendChild(newRow);

    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

// Event listener for deleting a row
document.getElementById('book-list').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        const confirmDelete = confirm('Are you sure you want to delete this book?');
        if (confirmDelete) {
            const row = e.target.parentElement.parentElement;
            row.remove(); // Remove the row from the table
        }
    }
});
