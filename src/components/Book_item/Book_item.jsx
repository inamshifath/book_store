import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookinfo,saveBookinfowish } from "../../Utility/Utility";

const Book_item = () => {
    const books =useLoaderData();
    const {bookId} =useParams();
    const bookIdint = parseInt(bookId);
    const book = books?.filter(book => book.bookId == bookId)
    console.log(book[0].image);

    const readlist = JSON.parse(localStorage.getItem('book-info')) || [];
    const wishlist = JSON.parse(localStorage.getItem('book-infoswish')) || [];
    

    const handleRead = () =>{
        const isExistread = readlist.find(item => item === bookIdint);
        const isExistwish = wishlist.find(item => item === bookIdint);

        if(isExistread!== undefined){
            toast('You have already read the book');
        }
        else if(isExistwish!== undefined){
            saveBookinfo(bookIdint);
            const updatedWishlist = wishlist.filter(id => id !== bookIdint);
            localStorage.setItem('book-infoswish', JSON.stringify(updatedWishlist));
            window.location.reload();  
            toast('book added to the read list');
        }
        else{
            saveBookinfo(bookIdint);
            toast('book added to the read list'); 
        }
    }

    const handleWish=() =>{
        const isExistread = readlist.find(item => item === bookIdint);
        const isExistwish = wishlist.find(item => item === bookIdint);

        if(isExistread!== undefined){
            toast('You have already read the book');
        }
        else if(isExistwish!== undefined){
            toast('Already in whishlist');
            
        }
        else{
            saveBookinfowish(bookIdint);
            window.location.reload();      
            toast('book added to whishlist');
        } 
        
    }


    return (
        <div className="container mx-auto mt-10 flex gap-10 mb-32">
            <div className="w-[50%]">
                <img className="w-fit  bg-gray-200 p-16 rounded-2xl" src={book[0].image} alt="" />

            </div>
            <div className="space-y-6">
                <h1 className="text-6xl font-serif font-extrabold ">{book[0].bookName}</h1>
                <h3 className="text-2xl font-semibold">By :   {book[0].author}</h3>
                <hr />
                <h3 className="text-2xl font-semibold" >{book[0].category} </h3>
                <hr />
                <p className="text-xl"> <span className=" font-bold">Review :</span>    {book[0].review} </p>
                <h3 className="text-xl"><span className=" font-bold">Tag :</span>   {book[0].tags[0]} </h3>
                <hr />
                <h4 className="text-xl grid grid-cols-2"><p className=" font-bold mr-10">Number of pages :</p>  <p>{book[0].totalPages}</p></h4>
                <h4 className="text-xl grid grid-cols-2"><p className=" font-bold mr-10">Publisher :</p>  <p>{book[0].publisher}</p></h4>
                <h4 className="text-xl grid grid-cols-2"><p className=" font-bold mr-10">yearOfPublishing :</p>  <p>{book[0].yearOfPublishing}</p></h4>
                <h4 className="text-xl grid grid-cols-2"><p className=" font-bold mr-10">Ratting :</p>  <p>{book[0].rating}</p></h4>
                <div >
                    <button onClick={handleRead} className="mr-6 bg-gray-100 border-2 border-gray-400 px-8 py-5 text-2xl font-semibold rounded-2xl hover:bg-green-100 hover:border-green-600 hover:text-green-700">Read</button>
                    <button onClick={handleWish} className="bg-blue-400 text-white px-8 py-5 text-2xl font-semibold rounded-2xl hover:bg-blue-100 hover:border-2 hover:border-blue-600 hover:text-blue-700">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Book_item;