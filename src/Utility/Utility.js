const getStoredBooks = () =>{
    const storedBooks = localStorage.getItem('book-info');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveBookinfo = (bookId) => {
    const storedBooks = getStoredBooks();
    const exist = storedBooks.find((storedBookId) => storedBookId === bookId); // Corrected comparison
    if (!exist) {
        storedBooks.push(bookId);
        localStorage.setItem('book-info', JSON.stringify(storedBooks));
    }
}

export{ getStoredBooks, saveBookinfo }