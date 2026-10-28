import ReactDOM from "react-dom";

const Modal = ({ onClose, children, actionBar }) => {
  // use React Portal to render modal inside modal container. improves reliability of styling so that modal won't be subject to changes in the CSS position property of parent element from "static" (e.g. to relative, fixed, sticky, etc.)
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector(".modal-container"),
  );
};

export default Modal;
