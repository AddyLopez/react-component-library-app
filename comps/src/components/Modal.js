import ReactDOM from "react-dom";
import { useEffect } from "react";

const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    // fixes a bug by preventing user from scrolling content below the modal window when modal is open
    document.body.classList.add("overflow-hidden");

    // return clean up function to remove class
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // use React Portal to render modal inside modal container. improves reliability of styling so that modal won't be subject to changes in the CSS position property of parent element from "static" (e.g. to relative, fixed, sticky, etc.)
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container"),
  );
};

export default Modal;
