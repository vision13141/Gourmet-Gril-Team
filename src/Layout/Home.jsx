import React from "react";
import Banner from "../Component/Banner";
import Special_Dis from "../Component/Special_Dis";
import HealthyFood from "../Component/HealthyFood";
import Video from "../Component/AboutPage/Video";
import Chef from "../Component/Chef";
import Review from "../Component/AboutPage/Review";
import Articels from "../Component/Articels";
import CustomerReviewForm from "../Component/CustomerReviewForm";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <Special_Dis />
      <HealthyFood />
      <Video />
      <Chef />
      <Review />
      <div className="text-center">
        <Link to={'/reviewForm'} >
          <button className="bg-black text-white px-4 py-2 rounded-full"
          >
            Add a Review
          </button>
        </Link>
      </div>
      <Articels />
    </div>
  );
};

export default Home;
