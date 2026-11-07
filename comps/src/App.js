import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div>
      <h1 className="text-center mt-10 mb-10 text-xl font-bold">
        React Component Library
      </h1>
      <div className="container mx-auto grid grid-cols-6 gap-4 mt-4 pl-2 pr-2">
        <Sidebar />
        <div className="col-span-5">
          <Route path="/accordion">
            <AccordionPage />
          </Route>
          <Route path="/">
            <DropdownPage />
          </Route>
          <Route path="/buttons">
            <ButtonPage />
          </Route>
          <Route path="/modal">
            <ModalPage />
          </Route>
          <Route path="/table">
            <TablePage />
          </Route>
          <Route path="/counter">
            <CounterPage initialCount={10} />
          </Route>
        </div>
      </div>
      <footer className="text-center mb-4 mt-4 w-full bottom-0 left-0 fixed text-sm">
        <a
          href="https://github.com/AddyLopez/react-component-library-app"
          target="_blank"
          title="To GitHub repository"
          className="text-blue-500"
        >
          Open-source code
        </a>{" "}
        by Addy López
      </footer>
    </div>
  );
}

export default App;
