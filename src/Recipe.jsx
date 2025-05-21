import RecipeInfo from "./RecipeInfo";
import PropTypes from "prop-types";
import styled from "styled-components";
export default function Recipe({ recipe, icon }) {
  const { name, time, servings, calories, difficulty, image } = recipe;

  const StyleCalories = styled.p`
    color: red;
    background-color: rgb(247, 139, 139);
    font-size: 20px;
  `;
  const StyleTime = styled.p`
    color: blue;
    background-color: rgb(139, 247, 247);
  `;
  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;`;

  return (
    <>
      <Container>
        <div className="text-image">
          <p>{name}</p>
          <img src={image} alt="image" width="300" />
        </div>

        <div className="recipe-info">
          <StyleTime>
            <RecipeInfo text={`${time} min`} icon={icon.time} />
          </StyleTime>
          <RecipeInfo text={`${servings} servings`} />
          <StyleCalories>
            <RecipeInfo text={`${calories} calories`} icon={icon.calories} />
          </StyleCalories>
          <RecipeInfo text={difficulty} />
        </div>
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
