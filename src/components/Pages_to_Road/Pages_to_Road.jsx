// import { useLoaderData } from "react-router-dom";
// import { getStoredBooks} from '../../Utility/Utility';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Pages_to_Road = () => {
//   const allbooks = useLoaderData();
//   const books = getStoredBooks();
//   const id = books.map(item => item.bookId);
//   console.log(id);
//   const item = allbooks.map( book => book.bookId == id);
//   console.log(item);

  return (
    <div className="container mx-auto mt-20">
        <h1 className="text-4xl font-serif font-bold text-center mb-6">given a bar chart using ratting </h1>
        {/* <div className="flex justify-center">
            <BarChart width={600} height={300} data={} >
                <XAxis dataKey="rating" /> 
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="rating" fill="#8884d8" barSize={30} /> 
            </BarChart>
        </div> */}
      
    </div>
  );
};

export default Pages_to_Road;
