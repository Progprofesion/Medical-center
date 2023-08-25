// const handleSubmit = (
//   e,
//   dataUsers,
//   login,
//   password,
//   dispatch,
//   setModalActive,
//   setAuth,
//   navigate,
//   setErrorAuth
// ) => {
//   e.preventDefault();
//   dataUsers.find((data) => {
//     if (data.login === login && data.password === password) {
//       localStorage.setItem("login", login);
//       localStorage.setItem("password", password);
//       dispatch(setModalActive(false));
//       dispatch(setAuth(true));
//       localStorage.setItem("auth", true);
//       return navigate("/account");
//     } else {
//       setErrorAuth(true);
//     }
//     return null;
//   });
// };

// export default handleSubmit;
