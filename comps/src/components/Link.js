import { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ children, to }) => {
  const { navigate } = useContext(NavigationContext); // destructure navigate function from context object

  const handleClick = (event) => {
    event.preventDefault(); // prevent automatic page refresh

    // programmatically navigate to different route
    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
};

export default Link;
