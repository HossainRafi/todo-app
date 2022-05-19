import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Account/Login/Login";
import Signup from "./component/Account/Signup/Signup";
import Navbar from "./component/Navbar/Navbar";
import Error from "./Error";
import AddTask from "./component/AddTask/AddTask";
import AllTask from "./component/AllTask/AllTask";
import RequireAuth from "./component/Account/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <AddTask />
            </RequireAuth>
          }
        />
        <Route
          path="/alltask"
          element={
            <RequireAuth>
              <AllTask />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}

export default App;
