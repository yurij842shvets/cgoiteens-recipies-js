import RecipeInfo from "./RecipeInfo";
import PropTypes from "prop-types";

export default function Recipe({ recipe }) {
  const { name, time, servings, calories, difficulty, image } = recipe;
  return (
    <>
      <h1>Recipe</h1>
      <p>{name}</p>
      <img src={image} alt="image" />
      <RecipeInfo text={`${time}`} />
      <RecipeInfo text={`${servings}`} />
      <RecipeInfo text={`${calories}`} />
      <RecipeInfo text={`${difficulty}`} />
    </>
  );
}
Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
