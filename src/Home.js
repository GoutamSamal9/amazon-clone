import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className="home_row">
        <Product
          id="0001"
          title="Harry Potter and the Philosopher's Stone"
          price={10.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
        />
        <Product
          id="0002"
          title="Harry Potter and the Philosopher's Stone"
          price={10.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="0003"
          title="Harry Potter and the Philosopher's Stone"
          price={10.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
        />
        <Product
          id="0004"
          title="Harry Potter and the Philosopher's Stone"
          price={10.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
        />
        <Product
          id="0005"
          title="Harry Potter and the Philosopher's Stone"
          price={10.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="0006"
          title="Harry Potter and the Philosopher's Stone"
          price={10.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
