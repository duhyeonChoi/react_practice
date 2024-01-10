import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./routes/Main.js";
import Detail from "./routes/Detail.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
            </>
          }
        />
        <Route
          path="/detail"
          element={
            <>
              <Detail />
            </>
          }
        />
        <Route path="/about" element={<div>ㅎㅇ</div>} />
      </Routes>
    </div>
  );
}
