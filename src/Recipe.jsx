import RecipeInfo from "./RecipeInfo";
import PropTypes from "prop-types";
import styled from "styled-components";
import Difficulty from "./Difficulty";

export default function Recipe({ recipe, icon }) {
  const { name, time, servings, calories, difficulty, image } = recipe;

  const ImageStyles = styled.img`
    width: 300px;
    border-radius: 35px;
  `;

  const RecipeTitle = styled.p`
    text-align: center;
    font-weight: bold;
  `;

  const StyleCalories = styled.p`
    color: red;
  `;
  const StyleTime = styled.p`
    color: blue;
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
      align-items: center;
      background-color: #fff;
      border-radius: 35px;
      width: 360px;
      height: 60px;
    }
  `;

  return (
    <>
      <Container>
        <div className="text-image">
          <ImageStyles src={image} alt="image" />
          <RecipeTitle>{name}</RecipeTitle>
        </div>

        <div className="recipe-info">
          <StyleTime>
            <RecipeInfo text={`${time} min`} icon={icon.time} />
          </StyleTime>
          <RecipeInfo text={`${servings} servings`} icon={icon.servings} />
          <StyleCalories>
            <RecipeInfo text={`${calories} calories`} icon={icon.calories} />
          </StyleCalories>
        </div>

        <Difficulty difficulty={difficulty}/>
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
    difficulty: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  icon: PropTypes.shape({
    time: PropTypes.element.isRequired,
    calories: PropTypes.element.isRequired,
  }).isRequired,
};
