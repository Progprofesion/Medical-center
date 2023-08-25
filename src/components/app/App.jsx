import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import "./app.scss";
const MainPage = lazy(() => import("../pages/MainPage"));
const AccountPage = lazy(() => import("../pages/AccountPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const Page404 = lazy(() => import("../pages/Page404"));

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
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default App;
