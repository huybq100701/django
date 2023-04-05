import { Fragment, useState } from "react";
import "../styles/pages/signIn.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/apiCall";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import SocialLoginButtons from "../components/sociallogin/SocialLoginButtons";
const SignIn = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    login(dispatch, { username: user.username, password: user.password });
  };
  return (
    <Fragment>
      <Header />
      <div
        className="signIn"
        style={{
          backgroundImage: `url(https://i.pinimg.com/564x/b4/6b/4d/b46b4d668107909f554e34f9a8847c1e.jpg?fbclid=IwAR3P8H77tF23ZwOpAPOnNHl6-EPleaqhFPVwVFAEvpMgcGyRRBpA4FQj2Bg)`,
        }}
      >
        <div className="sigIn__form">
          <form action="">
            <h1>LOGIN</h1>
            <div className="signIn__form__input">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUser({
                    ...user,
                    ["username"]: e.target.value,
                  });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setUser({
                    ...user,
                    ["password"]: e.target.value,
                  });
                }}
              />
            </div>
            <label>
              <input
                type="checkbox"
              />
              Lưu mật khẩu
            </label>

            <SocialLoginButtons />
          </form>
          <div className="signIn__login" onClick={() => handleLogin()}>
            Login
          </div>
          <div className="signIn__text">
            <Link to="/">Back to Homepage</Link>
            <a href="#">Create an account</a>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignIn;
