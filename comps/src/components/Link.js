import { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ children, to }) => {
  const { navigate } = useContext(NavigationContext); // destructure navigate function from context object

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
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
