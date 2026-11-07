import Button from "../components/Button";
import { GoStar } from "react-icons/go";
import { GoSquirrel } from "react-icons/go";

const ButtonPage = () => {
  return (
    <main className="flex gap-3 flex-col">
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
          Success!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoSquirrel />
          Whoa!
        </Button>
      </div>
      <div>
        <Button danger>Danger!</Button>
      </div>
    </main>
  );
};

export default ButtonPage;
