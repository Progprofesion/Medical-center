import { useDispatch } from "react-redux";
import { setModalActive } from "../../store/slices/userSlice";
const Button = ({ title, className }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setModalActive(true))}
      className={className}
    >
      {title}
    </button>
  );
};

export default Button;
