import Recipe from "./Recipe";
import recipesData from "./recipes.json";
import { IoTimer } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import styled from "styled-components";

const RowDirection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 32px;
`;

function App() {
  let iconsData = {
    time: <IoTimer />,
    calories: <FaFire />,
    servings: <FaChartPie />,
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
