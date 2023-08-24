import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainPage from "../pages/MainPage";
import AccountPage from "../pages/AccountPage";
// import ContactsPage from "../pages/ContactsPage";

import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <main className="app">
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/account" element={<AccountPage />} />
            {/* <Route path="*" element={<Page404 />} /> */}
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
    // <main className="app">
    //   <MainPage />
    // </main>
  );
};

export default App;
