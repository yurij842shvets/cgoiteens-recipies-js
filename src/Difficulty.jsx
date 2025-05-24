import PropTypes from "prop-types";
import styled from "styled-components";

export default function Difficulty({ difficulty }) {
  const levels = ["Easy", "Medium", "Hard"];

  const LevelsStyles = styled.div`
    display: flex;
    justify-content: space-around;
  `;
  const DifficultyTitleStyles = styled.h3`
    margin-left: 20px;
    font-size: 25px;
  `;
  const Level = styled.p`
    background-color: ${({ active }) =>
      active ? "rgba(255, 33, 33, 0.68)" : "rgba(251, 230, 155, 0.75)"};
    color: ${({ active }) => (active ? "#fff" : "#000")};
    width: 80px;
    height: 40px;
    border-radius: 20px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const DifficultyStyles = styled.div`
    margin-top: 20px;
    width: 280px;
    height: 150px;
    background-color: #fff;
    border-radius: 35px;
  `;

  return (
    <DifficultyStyles>
      <DifficultyTitleStyles>Difficulty</DifficultyTitleStyles>
      <LevelsStyles>
        {levels.map((level, index) => (
          <Level key={index} active={index === difficulty}>
            {level}
          </Level>
        ))}
      </LevelsStyles>
    </DifficultyStyles>
  );
}
Difficulty.propTypes = {
  difficulty: PropTypes.oneOf([0, 1, 2]).isRequired,
};
