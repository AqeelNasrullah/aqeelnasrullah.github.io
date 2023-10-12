import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
  return isOpen ? (
    <div className="modal">
      <div className="modalClose" onClick={onClose}>
        <FaTimes style={{ marginBottom: 0 }} size={16} />
      </div>
      <div className="modalContent">{children}</div>
    </div>
  ) : null;
};

export default Modal;
