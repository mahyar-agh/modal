import Button from "./../Button";

function ModalButtons({ onCloseModal, onNoClick }) {
  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <Button onClick={onCloseModal} type="simple" className="sm:py-2 sm:px-5">
        Yes
      </Button>
      <Button
        onClick={onNoClick}
        type="danger"
        className="mt-3 sm:mt-0 sm:mr-3 sm:py-1 sm:px-5"
      >
        No
      </Button>
    </div>
  );
}

export default ModalButtons;
