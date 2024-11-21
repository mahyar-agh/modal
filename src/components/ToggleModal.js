import Button from "./Button";

function ToggleModal({ onToggleModal }) {
  return (
    <div className="flex justify-center">
      <Button onClick={onToggleModal}>Toggle modal</Button>
    </div>
  );
}

export default ToggleModal;
