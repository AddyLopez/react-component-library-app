import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
      id: "awnefijavd",
      label: "Can I use React on a project?",
      content:
        "Yes, of course. This is placeholder text and it doesn't really matter what it says right now.",
    },
    {
      id: "jaiowfemsdk",
      label: "Can I use JavaScript on a project?",
      content:
        "Yes, of course. This is placeholder text and it doesn't really matter what it says right now.",
    },
    {
      id: "acsznois",
      label: "Can I use C++ on a project?",
      content:
        "Yes, of course. This is placeholder text and it doesn't really matter what it says right now.",
    },
  ];

  return <Accordion items={items} />;
};

export default App;
