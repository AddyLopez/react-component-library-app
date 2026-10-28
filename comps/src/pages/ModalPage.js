import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false); // Managing state in Modal's parent enables a modal to be shown in different contexts not dependent on clicking a button

  const handleClick = () => {
    setShowModal(true);
  };

  // adding a position that is not "static" to parent element breaks Modal, shows weakness in previous implementation
  return (
    <section className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </section>
  );
};

export default ModalPage;
