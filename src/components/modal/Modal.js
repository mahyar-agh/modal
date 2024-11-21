import { useState } from "react";
import ModalButtons from "./ModalButtons";
import ResizableDraggableModal from "./ResizableDraggableModal";

function Modal({ children, onCloseModal }) {
  const [modalContent, setModalContent] = useState(children);
  function handleNoClick() {
    setModalContent(null);
  }
  return (
    <div className="fixed inset-0 z-10 flex min-h-full items-end justify-center p-4 text-center sm:items-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onCloseModal}
      />
      <ResizableDraggableModal>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            {modalContent ? (
              modalContent
            ) : (
              <p>Modal content has been deleted</p>
            )}
          </div>
        </div>
        <ModalButtons onCloseModal={onCloseModal} onNoClick={handleNoClick} />
      </ResizableDraggableModal>
    </div>
  );
}

export default Modal;
