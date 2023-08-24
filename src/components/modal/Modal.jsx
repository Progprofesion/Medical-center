import "./modal.scss";
const Modal = ({ active, setActive, children }) => {
  return (
    <section
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </section>
  );
};

export default Modal;
