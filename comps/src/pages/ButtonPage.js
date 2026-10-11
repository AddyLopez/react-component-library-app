import Button from "../components/Button";
import { GoStar } from "react-icons/go";
import { GoSquirrel } from "react-icons/go";

const ButtonPage = () => {
  return (
    <main>
      <div>
        <Button primary rounded>
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Buy now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoStar />
          Whatever!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoSquirrel />
          Whoa!
        </Button>
      </div>
      <div>
        <Button danger>Smashing!</Button>
      </div>
    </main>
  );
};

export default ButtonPage;
