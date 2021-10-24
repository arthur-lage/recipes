import React from "react";
import "./style.css";

import IllustrationImage from '../../assets/images/login-illustration.svg'

import GoogleIcon from '../../assets/images/google-icon.svg'
import GithubIcon from '../../assets/images/github-icon.svg'

function Login() {
  return (
    <div className="login-container">
      <main className="login-main-container">
        <div className="login-left-content">
            <img src={IllustrationImage} alt="Illustration-Cooking" className="login-illustration" />
        </div>

        <div className="login-right-content">
            <h1 className="login-recipes-title">RECIPES</h1>
            <h2 className="login-login-title">LOGIN</h2>

            <button className="login-login-with-google login-btn">
                <img src={GoogleIcon} alt="Google-Icon" />
                Connect with Google
            </button>

            <button className="login-login-with-github login-btn">
                <img src={GithubIcon} alt="Github-Icon" />
                Connect with GitHub
            </button>
        </div>
      </main>

      <div className="login-footer">
        <p className="login-footer-paragraph">
          &copy;2021 - Made with ❤️ by <b>Arthur Lage</b>
        </p>
      </div>
    </div>
  );
}

export default Login;
