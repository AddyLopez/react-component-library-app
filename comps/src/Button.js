import PropTypes from "prop-types";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return <button>{children}</button>;
};

// named props below will be either true or undefined. not not undefined yields false. Number(true) yields 1; Number(false) yields 0.
// therefore if count is greater than 1, more than one variation was passed in, which triggers an error.
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one among primary, secondary, success, warning, or danger can be true.",
      );
    }
  },
};

export default Button;
