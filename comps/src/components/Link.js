import classnames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({ children, to, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation(); // destructure navigate function and currentPath state property from custom hook navigation context

  const classes = classnames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName,
  ); // className prop makes component more reusable through customizable styling. if currentPath matches to prop, include activeClassName

  const handleClick = (event) => {
    // open link in new tab if command/control key is depressed when link is clicked
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault(); // prevent automatic page refresh

    // programmatically navigate to different route
    navigate(to);
  };

  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
