import PropTypes from "prop-types";
import styled from "styled-components";
import RecipeInfo from "./RecipeInfo";

export default function Difficulty({ difficulty }) {
  const levels = ["Easy", "Medium", "Hard"];

  const LevelsStyles = styled.div`
    border-radius: 20px;
    width: 70px;
    height: 30px;
  `;

  const Level = styled.div`
  color: ${({active}) => (active ? "red" : "#222")};`

  const DifficultyStyles = styled.div`
    margin-top: 20px;
    width: 350px;
    height: 150px;
    background-color: #fff;
    border-radius: 35px;
  `;

  return (
    <DifficultyStyles>
      <h3>Difficulty</h3>
      <LevelsStyles>
        {levels.map((level, index) => (
          <Level key={index} active={level === difficulty}></Level>
        ))}
      </LevelsStyles>
    </DifficultyStyles>
  );
}
Difficulty.propTypes = {
  difficulty: PropTypes.string.isRequired,
};
