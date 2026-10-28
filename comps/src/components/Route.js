import useNavigation from "../hooks/use-navigation";

const Route = ({ children, path }) => {
  const { currentPath } = useNavigation(); // custom hook

  // render children if path prop and currentPath state value match
  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;
