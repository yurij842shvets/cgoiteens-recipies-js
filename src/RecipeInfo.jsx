import PropTypes from "prop-types";

export default function RecipeInfo({ icon, text }) {
  return (
    <>
      <div>
        <img src={icon} alt="icon" />
        <p>{text}</p>
      </div>
    </>
  )
}
RecipeInfo.propTypes = {
  // icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}