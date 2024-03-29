import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book_cark from "./Book_cark";

const Home = () => {
    const [books, setbooks] = useState([]);
    useEffect(()=>{
        fetch('/asset.json')
            .then(res=>res.json())
            .then(data => setbooks(data));
    },[])
    console.log('home',books);

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center p-24 bg-gray-300 rounded-2xl">
                <div className="space-y-20 ">
                    <h1 className="text-7xl font-extrabold w-fit font-serif ">Books to freshen up your bookshelf</h1>
                    <button className="py-3 px-7 text-3xl font-bold text-slate-50 bg-green-500 hover:bg-green-700 rounded-2xl"><Link to='/Listed_books'>View the list</Link></button>
                </div>
                <div className="w-96">
                    <img src="https://i.ibb.co/M1GJjHd/7.png" alt="" />
                </div>
            </div>
            <h1 className="mt-20 text-5xl font-bold font-serif text-center">Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10" >
                {
                    books.map(book => <Book_cark key={book.bookId} book={book}></Book_cark>)
                }
            </div>
            
        </div>
    );
};

export default Home;