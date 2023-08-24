import { useDispatch, useSelector } from "react-redux";
import { setModalActive } from "../../store/slices/userSlice";
import "./modal.scss";
const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const modalActive = useSelector((state) => state.user.modalActive);
  return (
    <section
      className={modalActive ? "modal active" : "modal"}
      onClick={() => dispatch(setModalActive(false))}
    >
      <div
        className={modalActive ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </section>
  );
};

export default Modal;
