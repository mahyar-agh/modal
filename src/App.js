import { useState } from "react";

import ToggleModal from "./components/ToggleModal";
import Modal from "./components/modal/Modal";

// Used this dummy contents for test:
// 1)
function DummyModalContent() {
  return (
    <>
      <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10"></div>
      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h2>Are you sure you wanna continue?</h2>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet qui
            illum consequatur rem vel, itaque atque! Accusantium, dolorum eaque,
            facilis ipsam error iusto,
          </p>
        </div>
      </div>
    </>
  );
}
// 2)
function DummyModalContent2() {
  return <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="React icon" />;
}

function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="w-full h-lvh p-5">
      <ToggleModal onToggleModal={toggleModal} />

      {showModal && (
        <Modal onCloseModal={() => setShowModal(false)}>
          <DummyModalContent />
        </Modal>
      )}
    </div>
  );
}

export default App;
