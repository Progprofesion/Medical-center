import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import "./app.scss";
import MainPage from "../pages/MainPage";
// import AccountPage from "../pages/AccountPage";
const AccountPage = lazy(() => import("../pages/AccountPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));

const App = () => {
  const auth = useSelector((state) => state.user.auth);
  return (
    <BrowserRouter>
      <main className="app">
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {localStorage.getItem("auth") || auth ? (
              <Route path="/account" element={<AccountPage />} />
            ) : (
              "null"
            )}
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={"Такой страницы не существует"} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default App;
