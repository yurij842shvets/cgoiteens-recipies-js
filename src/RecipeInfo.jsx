import PropTypes from 'prop-types';

export default function RecipeInfo({ text }) {
  return (
    <p>
       {text}
    </p>
  );
}

RecipeInfo.propTypes = {
  text: PropTypes.string.isRequired,
};