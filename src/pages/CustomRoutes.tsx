import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./home";
import Login from "./login";

export default function CustomRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}