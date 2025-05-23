import RecipeInfo from "./RecipeInfo";
import PropTypes from "prop-types";
import styled from "styled-components";
export default function Recipe({ recipe, icon }) {
  const { name, time, servings, calories, difficulty, image } = recipe;

  const StyleCalories = styled.p`
    color: red;
  `;
  const StyleTime = styled.p`
    color: blue
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .recipe-info {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 32px;
      background-color: #fff;
      border-radius: 35px;
      width: 300px;
    }
  `;

  return (
    <>
      <Container>
        <div className="text-image">
          <img src={image} alt="image" width="300" />
          <p>{name}</p>
        </div>

        <div className="recipe-info">
          <StyleTime>
            <RecipeInfo text={`${time} min`} icon={icon.time} />
          </StyleTime>
          <RecipeInfo text={`${servings} servings`} />
          <StyleCalories>
            <RecipeInfo text={`${calories} calories`} icon={icon.calories} />
          </StyleCalories>
        </div>

        <RecipeInfo text={difficulty} />
      </Container>
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
  icon: PropTypes.shape({
    time: PropTypes.element.isRequired,
    calories: PropTypes.element.isRequired,
  }).isRequired,
};
