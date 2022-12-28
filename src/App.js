import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";

import NavBar from "./components/NavBar";
import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate replace to="/users" />} />

        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/users/new" element={<p>New user</p>} />

        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>Welcome</p>} />
          <Route path="goodbye" element={<p>Goodbye</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
