import Recipe from "./Recipe";
import recipesData from "./recipes.json";
import { IoTimer } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";
import styled from "styled-components";

function App() {
  const RowDirection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `;

  let iconsData = {
    time: <IoTimer />,
    calories: <FaFire />,
  };

  return (
    <RowDirection>
      {recipesData.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} icon={iconsData} />
      ))}
    </RowDirection>
  );
}

export default App;
