// const handleSubmit = (e, dataUsers, login, password) => {
//   e.preventDefault();
//   dataUsers.forEach((data) => {
//     if (data.login === login && data.password === password) {
//       localStorage.setItem("login", login);
//       localStorage.setItem("password", password);
//       dispatch(setModalActive(false));
//       dispatch(setAuth(true));
//       localStorage.setItem("auth", true);
//       return navigate("/account");
//     } else {
//       console.log("Неверный логин");
//     }
//   });
// };

// export default handleSubmit;
