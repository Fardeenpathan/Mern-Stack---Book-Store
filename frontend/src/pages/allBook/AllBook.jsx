import React, { useEffect } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from "../../features/apiSlice";
const AllBook = () => {
  const dispatch = useDispatch();
  const { items: books, status, error } = useSelector((state) => state.books);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBook());
    }
  }, [status, dispatch]);

  return (
    <div className="mt-36">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="text-4xl font-bold my-4 text-center">
          We'r delighted to have you
          <span className="text-info mx-3">Here! :)</span>
        </h1>
        <p className="text-lg text-center">
          At our bookstore, we believe in the power of knowledge and the joy of
          discovery. Each book on our shelves is a gateway to new adventures,
          ideas, and perspectives. Whether you're a passionate reader, a curious
          learner, or simply looking to explore something new, we have something
          for everyone.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4">
          {books.map((item) => (
            <Card
              item={item}
              key={item.id}
              image={item.image}
              title={item.title}
              author={item.author}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBook;
