import classnames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({ children, to }) => {
  const { navigate } = useNavigation(); // destructure navigate function from custom hook

  const classes = classnames("text-blue-500", "mb-3");

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
