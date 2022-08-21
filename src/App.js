import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from"./components/Navbar.js"
import {BrowserRouter as Router,Route} from "react-router-dom"
import Slider from "./components/Slider.js" 
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"





function App() {

  return (
    <div>
      <Router>
       
       <PreNavbar/>
       <Navbar />

       <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>


       <Slider start={data.banner.start} />
       <Heading text="OFFERS"/>
       <Offers offer={data.offer} />
       <Heading text="STAR PRODUCTS"/>
       <StarProduct starProduct={data.starProduct} />
       <Heading text="HOT ACCESSORIES" />
       <HotAccessoriesMenu />
       
       <Heading text="music" />
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
          <Heading text="Smart Devices" />
          <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
          <Heading text="Home accesories" />

          <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
          <Heading text="lifestyle" />

          <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
          <Heading text="Mobile accesories" />

          <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />

          <Heading text="PRODUCT REVIEWS" />

          <ProductReviews productReviews={data.productReviews}/>

          <Heading text="VIDEOS" />
          <Videos videos={data.videos} />

          <Heading  text="IN THE PRESS"/>
   
          <Banner  banner={data.banner}/>
          <Footer footer={data.footer} />
       
        
      </Router>
    </div>
  );
}

export default App;
