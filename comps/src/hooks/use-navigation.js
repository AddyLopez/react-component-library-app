import { useContext } from "react";
import NavigationContext from "../context/navigation";

// custom hook
const useNavigation = () => {
  return useContext(NavigationContext);
};

export default useNavigation;
