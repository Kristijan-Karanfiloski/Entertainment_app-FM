import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/assets/logo.svg";
import "./Login.scss";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");
  // const [passwordValid, setPasswordValid] = useState(true);
  // const [isFirstLoad, setIsFirstLoad] = useState(true);
  const navigate = useNavigate();

  console.log("Email :", email);
  // console.log("Password :", password);

  const checkIfPasswordIsValid = (password) => {
    if (password.length < 6) {
      return "Can't be empty";
      // console.log("email must be at least 6 characters");
    } else {
      console.log("Successfully");
    }
  };

  const checkIfEmailIsValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // console.log("email", emailRegex.test(email));
    if (!emailRegex.test(email)) {
      return "Can't be empty";
    } else {
      console.log("Successfully");
    }
    // else if (!email.length) {
    //   return "Can't be empty";
    // }

    // return "";
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const errorMessageEmail = checkIfEmailIsValid(email);
    const errorMessagePassword = checkIfPasswordIsValid(password);

    // checkIfPasswordIsValid(password);

    // setIsFirstLoad(false);
    // setEmailValid(email !== "");
    // setPasswordValid(password !== "");
    //
    // if (email === "" || password === "") {
    //   console.log("enter value");
    // } else {
    //   navigate("/routeLayout");
    //   console.log("submitted");
    // }

    console.log({ errorMessageEmail });
    if (!errorMessageEmail && !errorMessagePassword) {
      navigate("/routeLayout");
      console.log("submitted");
    } else {
      setEmailValidationMessage(errorMessageEmail);
      setPasswordValidationMessage(errorMessagePassword);
    }
  };
  console.log({ emailValidationMessage });
  return (
    <div className="login-page">
      <div className="login-page__icon">
        <img src={Logo} alt="logo" />
      </div>
      <div className="login-page__container">
        <h1 className="login-page__container__title">Login</h1>
        <form onSubmit={handleOnSubmit} className="login-page__container__form">
          {/*<label>Email address</label>*/}
          <div className="login-page__container__form__input-container">
            <input
              className="login-page__container__form__input"
              type="text"
              name="username"
              // required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!!emailValidationMessage && (
              <p className="login-page__container__form__input_email__error">
                {emailValidationMessage}
              </p>
            )}

            {/*<label>Password</label>*/}
            <input
              className="login-page__container__form__input"
              type="password"
              name="password"
              // required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!!passwordValidationMessage && (
              <p className="login-page__container__form__input_password__error">
                {passwordValidationMessage}
              </p>
            )}
          </div>

          <button
            // onClick={() => {
            //   validateForm();
            // }}
            className={`login-page__container__form__button`}
            // disabled={isFirstLoad ? true : !(emailValid && passwordValid)}
            type="submit"
          >
            Login to your account
          </button>
        </form>
        {/*{valid && <p>Insert a value</p>}*/}
        <p className="login-page__container__text">
          Don't have an account? <span>Sign Up</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
