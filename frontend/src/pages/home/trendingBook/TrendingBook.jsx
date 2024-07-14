import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../../components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from "../../../features/apiSlice.js";
const TrendingBook = () => {
  const dispatch = useDispatch();
  const { items: books, status, error } = useSelector((state) => state.books);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBook());
    }
  }, [status, dispatch]);

  const filterData = books.filter(
    (data) => data.category === "Fiction" || data.category === "Science Fiction"
  );
  console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h2 className="text-4xl mt-16 mb-8 text-center">
        Trending on Book Haven
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Card
              item={item}
              key={item.id}
              image={item.image}
              title={item.title}
              author={item.author}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingBook;
