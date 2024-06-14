import Categories from "./components/Categories/Categories";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Policy from "./components/Layout/Policy/Policy";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Sliders";
import "./App.css";
import Campaigns from "./components/Campaigns/Campaigns";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div>
      <Header />
      <Slider/>
      <Categories/>
      <Products/>
      <Campaigns/>
      <Blogs/>
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
