import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const Book_cark = ({book}) => {
    const {bookId,image,bookName,author,category,rating,tags}=book;
    console.log('book card',book);

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 border-2 border-gray-400 space-y-5">
            <Link to={`/Book_item/${bookId}`}>
                <figure className='bg-[#f3f3f3] rounded-2xl py-2'><img className='w-44' src={image} alt="Shoes" /></figure>
                <div className=" space-y-5 mt-5">
                    <div className='flex gap-6'>
                        <p className='text-green-600 bg-green-100 font-bold px-3 rounded-full'>{tags[0]} </p>
                        <p className='text-green-600 bg-green-100 font-bold px-3 rounded-full' >{tags[1]} </p>
                    </div>
                    <h2 className="text-3xl font-serif font-semibold"> {bookName} </h2>
                    <h2 className='text-2xl '>By: {author}</h2>
                    <hr />
                    <div className="flex justify-between items-center text-xl">
                        <h3>{category}</h3>
                        <div className='flex items-center'>
                        <p>{rating}</p>
                        <CiStar />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book_cark.propTypes = {
    book: PropTypes.shape({
        image: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        bookId: PropTypes.string.isRequired
    }).isRequired
};

export default Book_cark;