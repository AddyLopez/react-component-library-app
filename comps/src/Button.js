import classnames from "classnames";

const example1 = classnames("px-3", "py-1.5", "bg-blue-500");
const example2 = classnames({
  "bg-blue-500": true,
  "text-yellow-500": false,
});
const example3 = classnames("px-1.5", {
  "bg-blue-500": true,
  "text-yellow-500": false,
});
console.log(
  "example 1: ",
  example1,
  "example 2: ",
  example2,
  "example 3: ",
  example3,
);

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
  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">
      {children}
    </button>
  );
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
