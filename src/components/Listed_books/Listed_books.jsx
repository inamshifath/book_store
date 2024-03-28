import { useLoaderData } from 'react-router-dom';
import './Listed_books.css'
import { useEffect, useState } from 'react';
import { getStoredBooks,getStoredBookswish } from '../../Utility/Utility';
import Listed_card from './Listed_card';


const Listed_books = () => {
    const books = useLoaderData();
    const [listedBook, setlistedBook] =useState([]);
    const [listedBookwish, setlistedBookwish] =useState([]);

    useEffect(()=>{
        const storedBookids = getStoredBooks();
        if(books.length > 0){
            const BooksList =[];
            for(const bookId of storedBookids){
                const book = books.find( book => book.bookId == bookId)
                if(book){
                    BooksList.push(book)
                }
            }
            setlistedBook(BooksList);
        }
    },[books]);

    useEffect(()=>{
        const storedBookidswish = getStoredBookswish();
        if(books.length > 0){
            const BooksListwish =[];
            for(const bookId of storedBookidswish){
                const book = books.find( book => book.bookId == bookId)
                if(book){
                    BooksListwish.push(book)
                }
            }
            setlistedBookwish(BooksListwish);
        }
    },[books]);

    return (
        <div className="container mx-auto">
            <div className="bg-gray-300 rounded-2xl py-12 mt-10">
                <h1 className="text-5xl font-serif font-bold text-center">Books</h1>
            </div>
            <div  className="text-center mt-10 ">
                <select className="text-2xl font-bold bg-green-400 px-8 py-4 rounded-xl text-white w-44" id="filterDropdown">
                    <option className="bg-slate-300 text-black hover:bg-slate-400" value="">Sort by</option>
                    <option className="bg-slate-300 text-black hover:bg-slate-400" value="rating">Rating</option>
                    <option className="bg-slate-300 text-black hover:bg-slate-400" value="numPages">Number of Pages</option>
                    <option className="bg-slate-300 text-black hover:bg-slate-400" value="publishYear">Publish Year</option>
                </select>
            </div>
            <div role="tablist" className="tabs tabs-lifted ">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-2xl" aria-label="Read list" />
                <div role="tabpanel" className="tab-content space-y-5">
                    { listedBook.map((book, index) => (<Listed_card key={index} book={book} />))}
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-2xl" aria-label="Wish list" checked />
                <div role="tabpanel" className="tab-content space-y-5">
                    { listedBookwish.map((book, index) => (<Listed_card key={index} book={book} />))}
                </div>
            </div>
        </div>
       
    );
};

export default Listed_books;