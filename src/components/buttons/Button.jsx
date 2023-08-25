import { useDispatch } from "react-redux";
import { setModalActive, removeUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
const Button = ({ title, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        localStorage.getItem("login")
          ? dispatch(removeUser()) && navigate("/")
          : dispatch(setModalActive(true))
      }
      className={className}
    >
      {localStorage.getItem("login") ? "Выйти" : "Войти"}
    </button>
  );
};

export default Button;
