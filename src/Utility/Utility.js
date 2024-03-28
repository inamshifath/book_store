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

const getStoredBookswish = () =>{
    const storedBooksswish = localStorage.getItem('book-infoswish');
    if(storedBooksswish){
        return JSON.parse(storedBooksswish);
    }
    return [];
}

const saveBookinfowish = (bookId) => {
    const storedBookswish = getStoredBookswish();
    const exist = storedBookswish.find((storedBookId) => storedBookId === bookId); // Corrected comparison
    if (!exist) {
        storedBookswish.push(bookId);
        localStorage.setItem('book-infoswish', JSON.stringify(storedBookswish));
    }
}

export{ getStoredBooks, saveBookinfo, getStoredBookswish,saveBookinfowish}  