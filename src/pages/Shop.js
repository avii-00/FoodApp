import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    imgSrc: "/img/shop/fries.jpg",
    name: "French Fries",
    prices: { small: 520, regular: 590, large: 670 },
  },
  {
    imgSrc: "/img/shop/prawns.jpg",
    name: "Grilled Prawns",
    prices: { small: 700, regular: 1050, large: 1400 },
  },
  {
    imgSrc: "/img/shop/garlicbread.jpg",
    name: "Cheesy Garlic Bread",
    prices: { small: 500, regular: 600, large: 700 },
  },
  {
    imgSrc: "/img/shop/toast.jpg",
    name: "Cheesy Garlic Toast",
    prices: { small: 520, regular: 780, large: 1040 },
  },
  {
    imgSrc: "/img/shop/chickenwings.jpg",
    name: "BBQ Chicken Wings",
    prices: { small: 740, regular: 1110, large: 1480 },
  },
  {
    imgSrc: "/img/shop/cheeseballs.jpg",
    name: "Chicken & Cheese Balls",
    prices: { small: 400, regular: 600, large: 800 },
  },

  {
    imgSrc: "/img/shop/puff.jpg",
    name: "Sausage Pastry",
    prices: { small: 360, regular: 540, large: 720 },
  },
  {
    imgSrc: "/img/shop/buns.jpg",
    name: "Sausage Bun",
    prices: { small: 400, regular: 600, large: 800 },
  },
  {
    imgSrc: "/img/shop/springrolls.jpg",
    name: "Chicken Spring Rolls",
    prices: { small: 440, regular: 660, large: 880 },
  },
  {
    imgSrc: "/img/shop/patties.jpg",
    name: "Chicken Patties",
    prices: { small: 360, regular: 540, large: 720 },
  },
  {
    imgSrc: "/img/shop/rolls.jpg",
    name: "Fish Rolls",
    prices: { small: 400, regular: 600, large: 800 },
  },
  {
    imgSrc: "/img/shop/cutlet.jpg",
    name: "Fish Cutlets",
    prices: { small: 400, regular: 600, large: 800 },
  },
  {
    imgSrc: "/img/shop/muffin.jpg",
    name: "Bacon & Egg Muffin",
    prices: { small: 320, regular: 480, large: 640 },
  },
  {
    imgSrc: "/img/shop/sandwich.jpg",
    name: "Egg & Cheese Sandwich",
    prices: { small: 550, regular: 690, large: 730 },
  },

  {
    imgSrc: "/img/shop/TekkaMaki.jpg",
    name: "Tekka Maki",
    prices: { small: 1160, regular: 1740, large: 2320 },
  },
  {
    imgSrc: "/img/shop/Hosomaki.jpg",
    name: "Hosomaki",
    prices: { small: 1080, regular: 1620, large: 2160 },
  },
  {
    imgSrc: "/img/shop/sashimi.jpg",
    name: "Salmon Sashimi",
    prices: { small: 1600, regular: 2400, large: 3200 },
  },
  {
    imgSrc: "/img/shop/nigiri.jpg",
    name: "Nigiri",
    prices: { small: 1800, regular: 2700, large: 3600 },
  },

  {
    imgSrc: "/img/shop/shrimprice.jpg",
    name: "Shrimp Fried Rice",
    prices: { small: 800, regular: 1200, large: 1900 },
  },
  {
    imgSrc: "/img/shop/noodle.jpg",
    name: "Stir Fried Prawn Noodles",
    prices: { small: 850, regular: 1300, large: 1950 },
  },
  {
    imgSrc: "/img/shop/eggrice.jpg",
    name: "Egg Fried Rice",
    prices: { small: 600, regular: 900, large: 1200 },
  },
  {
    imgSrc: "/img/shop/eggnoodle.jpg",
    name: "Korean Fried Egg Noodles",
    prices: { small: 500, regular: 800, large: 950 },
  },
  {
    imgSrc: "/img/shop/carbonara.jpg",
    name: "Spaghetti Carbonara",
    prices: { small: 900, regular: 1500, large: 2100 },
  },
  {
    imgSrc: "/img/shop/spaghetti.jpg",
    name: "Spaghetti Bolognaise",
    prices: { small: 850, regular: 1400, large: 2000 },
  },
  {
    imgSrc: "/img/shop/fettuccine.jpg",
    name: "Fettuccine with Tomato Sauce",
    prices: { small: 950, regular: 1550, large: 2200 },
  },
  {
    imgSrc: "/img/shop/spaghettis.jpg",
    name: "Spaghetti with Sausages",
    prices: { small: 850, regular: 1300, large: 1850 },
  },
  {
    imgSrc: "/img/shop/mac.jpg",
    name: "Mac and Chees",
    prices: { small: 700, regular: 1200, large: 1700 },
  },
  {
    imgSrc: "/img/shop/lasagna.jpg",
    name: "Chicken Lasagna",
    prices: { small: 750, regular: 1300, large: 1750 },
  },
  {
    imgSrc: "/img/shop/chipizza.jpg",
    name: "Chicken Pizza",
    prices: { small: 930, regular: 1830, large: 3290 },
  },
  {
    imgSrc: "/img/shop/vegpizza.jpg",
    name: "Vegetable Pizza",
    prices: { small: 850, regular: 1100, large: 1550 },
  },
  {
    imgSrc: "/img/shop/pizza.jpg",
    name: "Bacon & Pepperoni Pizza",
    prices: { small: 1000, regular: 1650, large: 2400 },
  },
  {
    imgSrc: "/img/shop/pep.jpg",
    name: "Pepperoni Pizza",
    prices: { small: 950, regular: 1550, large: 2300 },
  },
  {
    imgSrc: "/img/shop/mag.jpg",
    name: "Pizza Margherita",
    prices: { small: 900, regular: 1400, large: 2000 },
  },
  {
    imgSrc: "/img/shop/hawa.jpg",
    name: "Hawaiian Pizza",
    prices: { small: 1000, regular: 1600, large: 2250 },
  },

  {
    imgSrc: "/img/shop/banana.jpg",
    name: "Banana Smoothie",
    prices: { small: 400, regular: 650, large: 800 },
  },
  {
    imgSrc: "/img/shop/straw.jpg",
    name: "Strawberry Smoothie",
    prices: { small: 550, regular: 800, large: 1100 },
  },
  {
    imgSrc: "/img/shop/vani.jpg",
    name: "Vanilla Milkshake",
    prices: { small: 400, regular: 600, large: 850 },
  },
  {
    imgSrc: "/img/shop/choco.jpg",
    name: "Chocolate Milkshake",
    prices: { small: 400, regular: 600, large: 850 },
  },
  {
    imgSrc: "/img/shop/orange.jpg",
    name: "Orange Juice",
    prices: { small: 350, regular: 500, large: 750 },
  },
  {
    imgSrc: "/img/shop/lime.jpg",
    name: "Lime Juice",
    prices: { small: 300, regular: 450, large: 600 },
  },
  {
    imgSrc: "/img/shop/fruit.jpg",
    name: "Fruit Salad",
    prices: { small: 650, regular: 950, large: 1250 },
  },
  {
    imgSrc: "/img/shop/jelly.jpg",
    name: "Jelly Pudding",
    prices: { small: 550, regular: 750, large: 950 },
  },
  {
    imgSrc: "/img/shop/caramel.jpg",
    name: "Cream Caramel",
    prices: { small: 500, regular: 700, large: 950 },
  },
  {
    imgSrc: "/img/shop/pudding.jpg",
    name: "Watalappan",
    prices: { small: 500, regular: 700, large: 950 },
  },
];

const Shop = () => {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imgSrc={product.imgSrc}
          name={product.name}
          prices={product.prices}
        />
      ))}
    </div>
  );
};

export default Shop;
