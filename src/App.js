import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import forgotpassword from "./pages/Forgotpassword";
import offers from "./pages/Offers";
import ForgotPassword from "./pages/Forgotpassword";
import Offers from "./pages/Offers";

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Sign-In" element={<SignIn />} />
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/Forgot-Password" element={<ForgotPassword />} />
        <Route path="/Offers" element={<Offers />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
