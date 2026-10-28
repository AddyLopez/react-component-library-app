import { useContext } from "react";
import NavigationContext from "../context/navigation";

const Route = ({ children, path }) => {
  const { currentPath } = useContext(NavigationContext);

  // render children if path prop and currentPath state value match
  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;
