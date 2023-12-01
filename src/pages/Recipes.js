import React, { useState } from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState("");
  // `searchTerm` holds the current search term entered by the user
  // `setSearchTerm` is a function to update `searchTerm`
  const [searched, setSearched] = useState(false);
  // `searched` tracks whether a search has been performed.
  // `setSearched` is a function to update `searched`.

  const recipes = [
    {
      title: "Chicken Pizza",
      image: "/img/gallery/pizza.jpg",
      authorImg: "/img/topchefs/chef5.jpg",
      description:
        "This chicken pizza recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.tasteofhome.com/recipes/chicken-pizza/",
    },
    {
      title: "Pesto Pasta",
      image: "/img/gallery/pesto.jpg",
      authorImg: "/img/topchefs/chef5.jpg",
      description:
        "This pesto pasta recipe is easy to customize by adding your favorite items, if you like. ",
      url: "https://www.recipetineats.com/pesto-pasta/",
    },
    {
      title: "Club Sandwich",
      image: "/img/gallery/sandwich.jpg",
      authorImg: "/img/topchefs/chef4.jpg",
      description:
        "This club sandwich recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.spendwithpennies.com/club-sandwich/",
    },
    {
      title: "Chicken Burger",
      image: "/img/gallery/grilled.jpg",
      authorImg: "/img/topchefs/chef4.jpg",
      description:
        "This chicken burger recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.indianhealthyrecipes.com/chicken-burger/",
    },
    {
      title: "Banana Smoothie",
      image: "/img/gallery/smoothie.jpg",
      authorImg: "/img/topchefs/chef4.jpg",
      description:
        "This banana smoothie recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.inspiredtaste.net/19907/simple-banana-smoothie-recipe/",
    },
    {
      title: "Chocolate Brownies",
      image: "/img/gallery/brownie.jpg",
      authorImg: "/img/topchefs/chef4.jpg",
      description:
        "This brownie recipe is easy to customize by adding your favorite itemss, if you like.",
      url: "https://www.bbcgoodfood.com/recipes/best-ever-chocolate-brownies-recipe",
    },
    {
      title: "Croissants",
      image: "/img/gallery/croissant.jpg",
      authorImg: "/img/topchefs/chef1.jpg",
      description:
        "This croissant recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://cooking.nytimes.com/recipes/1022053-croissants",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/biriyani.jpg",
      authorImg: "/img/topchefs/chef2.jpg",
      description:
        "This mutton biriyani recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.indianhealthyrecipes.com/mutton-biryani/",
    },
    {
      title: "Chicken Soup",
      image: "/img/gallery/soup.jpg",
      authorImg: "/img/topchefs/chef1.jpg",
      description:
        "This chicken soup recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.allrecipes.com/recipe/8814/homemade-chicken-soup/",
    },
    {
      title: "Prawn Salad",
      image: "/img/gallery/salads.jpg",
      authorImg: "/img/topchefs/chef4.jpg",
      description:
        "This prawn salad recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.delish.com/uk/cooking/recipes/a31952820/prawn-salad/",
    },
    {
      title: "Chicken Lasagna",
      image: "/img/gallery/lasagna.jpg",
      authorImg: "/img/topchefs/chef5.jpg",
      description:
        "This chicken lasagna recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://natashaskitchen.com/chicken-lasagna-recipe/",
    },
    {
      title: "Chocolate Cake",
      image: "/img/gallery/cake.jpg",
      authorImg: "/img/topchefs/chef4.jpg",
      description:
        "This chocolate cake recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://cafedelites.com/chocolate-cake/",
    },
    {
      title: "Chicken Wings",
      image: "/img/gallery/chicken.jpg",
      authorImg: "/img/topchefs/chef4.jpg",
      description:
        "This chicken wings recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://tastesbetterfromscratch.com/crispy-baked-chicken-wings/",
    },
    {
      title: "Chicken Noodles",
      image: "/img/gallery/noodles.jpg",
      authorImg: "/img/topchefs/chef3.jpg",
      description:
        "This chicken noodles recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.everyday-delicious.com/sweet-and-sour-chicken-with-noodles-and-vegetables/",
    },
    {
      title: "Spaghetti Bolognese",
      image: "/img/gallery/pasta.jpg",
      authorImg: "/img/topchefs/chef5.jpg",
      description:
        "This spaghetti bolognese recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.bbcgoodfood.com/recipes/best-spaghetti-bolognese-recipe",
    },
    {
      title: "Seafood Tacos",
      image: "/img/gallery/tacos.jpg",
      authorImg: "/img/topchefs/chef5.jpg",
      description:
        "This seafood tacos recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.bbcgoodfood.com/recipes/mix-match-seafood-tacos",
    },
    {
      title: "Chicken Koththu",
      image: "/img/gallery/koththu.jpg",
      authorImg: "/img/topchefs/chef6.jpg",
      description:
        "This chicken koththu recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://cooking.nytimes.com/recipes/1017015-chicken-kottu-roti",
    },
    {
      title: "Watalappan",
      image: "/img/gallery/watalappan.jpg",
      authorImg: "/img/topchefs/chef6.jpg",
      description:
        "This watalappan recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.joyofeatingtheworld.com/watalappan-sri-lankan-coconut-custard/",
    },
    {
      title: "Spring Rolls",
      image: "/img/gallery/rolls.jpg",
      authorImg: "/img/topchefs/chef3.jpg",
      description:
        "This spring rolls recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.indianhealthyrecipes.com/baked-vegetable-spring-rolls-recipe-crusty-oven-baked-vegetable-spring-rolls/",
    },
    {
      title: "Butter Chicken",
      image: "/img/gallery/butter.jpg",
      authorImg: "/img/topchefs/chef2.jpg",
      description:
        "This butter chicken recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://cafedelites.com/butter-chicken/",
    },
    {
      title: "Polos Curry",
      image: "/img/gallery/polos.jpg",
      authorImg: "/img/topchefs/chef6.jpg",
      description:
        "This polos curry recipe is easy to customize by adding your favorite items, if you like.",
      url: "https://www.islandsmile.org/sri-lankan-green-jack-fruit-curry-polos/",
    },
  ].sort(() => Math.random() - 0.5); /* Shuffle the array */

  // Create a filtered array of recipes based on the search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Determine which set of recipes to display based on whether a search has been performed
  const displayRecipes = searched ? filteredRecipes : recipes;

  return (
    <div>
      <PreviousSearches
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearched={setSearched}
      />
      <div className="recipes-container">
        {displayRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
