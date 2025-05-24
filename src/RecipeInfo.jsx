import PropTypes from "prop-types";
import styled from "styled-components";

export default function RecipeInfo({ icon, text }) {
  const Flex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `;

  return (
    <>
      <Flex>
        <p>{icon}</p>
        <p>{text}</p>
      </Flex>
    </>
  );
}

RecipeInfo.propTypes = {
  text: PropTypes.element.isRequired,
  icon: PropTypes.string.isRequired,
};
