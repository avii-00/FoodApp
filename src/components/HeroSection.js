import React from "react";
import { Link } from "react-router-dom";
import CustomImage from "./CustomImage";

export default function HeroSection() {
  const images = [
    "/img/gallery/burger.jpg",
    "/img/gallery/chicken.jpg",
    "/img/gallery/noodles.jpg",
    "/img/gallery/pasta.jpg",
    "/img/gallery/pizza.jpg",
    "/img/gallery/prawns.jpg",
    "/img/gallery/rice.jpg",
    "/img/gallery/salad.jpg",
    "/img/gallery/tacos.jpg",
  ];

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">Welcome To FoodLovers!</h1>
        <p className="info">
          The FoodLovers started in 2021 with the intention of creating an
          online magazine featuring the web’s most innovative food bloggers,
          their recipes, and their photography. The recipes are fresh, seasonal,
          mostly simple, often healthy, and sometimes peppered with a little
          cheese and butter mixed in.
        </p>
        <Link to="/recipes">
          <button className="btn">Explore More</button>
        </Link>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"70%"} />
        ))}
      </div>
    </div>
  );
}
