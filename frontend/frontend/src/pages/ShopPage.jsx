import { Fragment } from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

function ShopPage() {
  return (
    <Fragment>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
    </Fragment>
  );
}

export default ShopPage;
