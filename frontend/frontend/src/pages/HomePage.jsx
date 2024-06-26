import React from "react";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Brands from "../components/Brands/Brands";
import Blogs from "../components/Blogs/Blogs";
import Campaigns from "../components/Campaigns/Campaigns";
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Sliders";

const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs />
      <Brands />
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;
