import Button from "./Button";

const App = () => {
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
        <Button success>Whatever!</Button>
      </div>
      <div>
        <Button warning>Whoa!</Button>
      </div>
      <div>
        <Button danger>Smashing!</Button>
      </div>
    </main>
  );
};

export default App;
