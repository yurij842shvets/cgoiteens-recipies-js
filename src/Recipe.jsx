import PropTypes from 'prop-types';
import RecipeInfo from './RecipeInfo';

export default function Recipe({ recipe }) {
  const { name, time, servings, calories, difficulty, image } = recipe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} width="300" />
      <RecipeInfo text={`${time} min`}  />
      <RecipeInfo text={`${servings} servings`}  />
      <RecipeInfo text={`${calories} kcal`}  />
      <RecipeInfo text={`Difficulty: ${difficulty}`}  />
    </div>
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