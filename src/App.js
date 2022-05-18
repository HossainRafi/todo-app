import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Account/Login/Login";
import Signup from "./component/Account/Signup/Signup";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}

export default App;
