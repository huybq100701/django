import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

import "./SocialLoginButtons.scss";

function SocialLoginButtons() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseApple = (response) => {
    console.log(response);
  };
  return (
    <div>
      {/* Đăng nhập bằng Google */}
      <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        buttonText=""
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      >
        <img
          className="login-icon"
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="Google"
        />
      </GoogleLogin>

      <FacebookLogin
        appId="YOUR_APP_ID"
        fields="name,email,picture"
        callback={responseFacebook}
        icon={
          <img
            className="login-icon"
            src="https://img.icons8.com/color/48/000000/facebook.png"
            alt="Facebook"
          />
        }
      />
    </div>
  );
}

export default SocialLoginButtons;
