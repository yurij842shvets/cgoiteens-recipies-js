import PropTypes from "prop-types";

export default function RecipeInfo({ icon, text }) {
  return (
    <>
      <div>
        <p>
          {text}, {icon}
        </p>
      </div>
    </>
  );
}

RecipeInfo.propTypes = {
  text: PropTypes.element.isRequired,
  icon: PropTypes.string.isRequired,
};
