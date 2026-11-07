import classnames from "classnames";

const Panel = ({ children, className, ...rest }) => {
  const finalClassNames = classnames(
    "border rounded p-3 shadow bg-white w-11/12",
    className,
  );

  // pass down any additional props with ...rest (for example, events of any type and so on.)
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
