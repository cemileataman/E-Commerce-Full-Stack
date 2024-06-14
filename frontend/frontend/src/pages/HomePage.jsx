import React from "react";
import Footer from "../components/Layout/Footer/Footer";
import Policy from "../components/Layout/Policy/Policy";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Brands from "../components/Brands/Brands";
import Blogs from "../components/Blogs/Blogs";
import Campaigns from "../components/Campaigns/Campaigns";
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Sliders";
import Header from "../components/Layout/Header/Header";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Policy />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
