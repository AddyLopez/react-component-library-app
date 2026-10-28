import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false); // Managing state in Modal's parent enables a modal to be shown in different contexts not dependent on clicking a button

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // Passing actionBar as props instead of with children content is a design decision to facilitate separate styling
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );

  // adding a position that is not "static" to parent element breaks Modal, shows weakness in previous implementation
  return (
    <section>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </section>
  );
};

export default ModalPage;
