import Button from "./Button";

const App = () => {
  return (
    <main>
      <div>
        <Button success primary>
          Click me!
        </Button>
      </div>
      <div>
        <Button>Buy now!</Button>
      </div>
      <div>
        <Button>Whatever!</Button>
      </div>
      <div>
        <Button>Whoa!</Button>
      </div>
      <div>
        <Button>Smashing!</Button>
      </div>
    </main>
  );
};

export default App;
