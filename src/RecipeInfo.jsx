import PropTypes from "prop-types";
import styled from "styled-components";

export default function RecipeInfo({ icon, text }) {
  const Flex = styled.p`
    display: flex;
    flex-direction: row;
  `
  
  return (
    <>
      <div>
        <Flex>
          {text}, {icon}
        </Flex>
      </div>
    </>
  );
}

RecipeInfo.propTypes = {
  text: PropTypes.element.isRequired,
  icon: PropTypes.string.isRequired,
};
