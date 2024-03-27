import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { LuFileBarChart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Listed_card = ({ book }) => {
    const { image, bookName, author,tags,yearOfPublishing,publisher,totalPages,category,rating } = book;
    return (
        <div className="card gap-6 card-side bg-base-100 shadow-xl p-5">
            <figure ><img className='w-56  bg-gray-200 rounded-2xl p-6' src={image} alt="book"/></figure>
            <div className="space-y-5">
                <h2 className="text-4xl font-serif font-bold "> {bookName}</h2>
                <h2 className="text-xl font-semibold"> By: {author}</h2>
                <div className=" flex gap-5">  
                    <div className='flex justify-around items-center'>
                            <span className='text-xl font-extrabold mr-3'>Tag:</span>
                            <p className='text-green-600 bg-green-100 font-bold px-3 rounded-full mr-2'>{tags[0]} </p>
                            <p className='text-green-600 bg-green-100 font-bold px-3 rounded-full' >{tags[1]} </p>
                    </div>
                    <h1 className='flex items-center text-xl'> <IoLocationOutline /> <span className='ml-2'>Year of Publishing:</span> {yearOfPublishing} </h1> 
                </div>
                <div className='flex gap-6'>
                    <h2 className="flex items-center gap-3 text-xl"><BsPeople /> <span>Publisher: {publisher}</span></h2>
                    <h2 className="flex items-center gap-3 text-xl"><LuFileBarChart /> <span>Paages  {totalPages}</span></h2>
                </div>
                <hr />
                <div className='flex gap-3'>
                    <h2 className="text-blue-600 bg-blue-100 font-bold px-4 py-3 rounded-full text-xl">Catagory: {category}</h2>
                    <h2 className="text-orange-600 bg-orange-100 font-bold px-4 py-3 rounded-full text-xl"> Rating: {rating}</h2>
                    <button className="px-4 py-3 text-3xl font-bold text-slate-50 bg-green-500 hover:bg-green-700 rounded-full"><Link to='/Book_item'>View the list</Link></button>
                </div>
            </div>
        </div>
    );
};

Listed_card.propTypes = {
    book: PropTypes.shape({
        bookName: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        yearOfPublishing: PropTypes.string.isRequired,
        publisher: PropTypes.string.isRequired,
        totalPages: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired
    }).isRequired
};

export default Listed_card;
