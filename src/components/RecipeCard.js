import React from "react";
import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg} alt="" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">{recipe.description} </p>
        <a
          className="read-btn"
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          READ RECIPE
        </a>
      </div>
    </div>
  );
}
