import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/assets/logo.svg";
import "./Login.scss";
import { useState } from "react";

const Login = () => {
  const [loginEmail, setLoginsEmail] = useState("");
  const [loginPassword, setPassword] = useState("");
  const [emailValidationMessage, setLoginsEmailValidationMessage] =
    useState(false);
  const [loginPasswordValidationMessage, setPasswordValidationMessage] =
    useState(false);

  const navigate = useNavigate();

  // const checkIfPasswordIsValid = (loginPassword) => {
  //   if (loginPassword.length <= 5) {
  //     return "Can't be empty";
  //     // console.log("email must be at least 6 characters");
  //   } else {
  //     // console.log("Successfully");
  //   }
  // };

  // const checkIfEmailIsValid = (loginEmail) => {
  //   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //   // console.log("email", emailRegex.test(email));
  //   if (!emailRegex.test(loginEmail)) {
  //     // return "Can't be empty";
  //     return "Email does not exist";
  //   } else {
  //     // console.log("Successfully");
  //   }
  //
  //   // return "";
  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const existingUsersJSON = JSON.parse(localStorage.getItem("users")) || [];
    // const existingUsersJSON = JSON.parse(localStorage.getItem("users"));

    //this will return true

    const emailExists = existingUsersJSON.some(
      (user) => user.signUpEmail === loginEmail
    );

    //this will return false
    const passwordMismatchForUser = existingUsersJSON.some(
      (user) =>
        user.signUpEmail === loginEmail && user.signUpPassword !== loginPassword
    );

    // console.log("Email exists: ", emailExists);

    console.log("Sign Up Email :", { loginEmail });
    console.log("Sign Up Password :", { loginPassword });

    if (emailExists) {
      if (passwordMismatchForUser) {
        console.log("Password mismatch if :", emailExists);

        // Password does not match for the provided email.
        setPasswordValidationMessage(!loginPasswordValidationMessage);
        // setLoginsEmailValidationMessage(emailValidationMessage);
        setLoginsEmailValidationMessage(false);
      } else {
        console.log("Password mismatch else :", emailExists);
        // Password matches, navigate to the next page.
        setPasswordValidationMessage(loginPasswordValidationMessage);
        setLoginsEmailValidationMessage(emailValidationMessage);
        navigate("/routeLayout");
      }
    } else {
      console.log("EmailExist from else :", emailExists);
      // Email doesn't exist
      setLoginsEmailValidationMessage(!emailValidationMessage);
      setPasswordValidationMessage(false);
    }
    // const errorMessageEmail = checkIfEmailIsValid(loginEmail);
    // const errorMessagePassword = checkIfPasswordIsValid(loginPassword);

    // if (emailExists) {
    //   navigate("/routeLayout");
    //   // alert("Successfully from LOGIN PAGE");
    //   // return;
    // } else {
    //   // console.log("Email dosen't exist");
    //   setLoginsEmailValidationMessage(!emailValidationMessage);
    //   setPasswordValidationMessage(!loginPasswordValidationMessage);
    // }

    // console.log(passwordMatch);

    // else {
    //   setLoginsEmailValidationMessage(errorMessageEmail);
    //   setPasswordValidationMessage(errorMessagePassword);
    //   // console.log("Email  does not exist");
    //   // alert("Email  does not exist");
    // }

    // if (!errorMessageEmail && !errorMessagePassword) {
    //   console.log("nice");
    // } else {
    //   setLoginsEmailValidationMessage(errorMessageEmail);
  };
  // console.log({ emailValidationMessage });
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
              value={loginEmail}
              onChange={(e) => setLoginsEmail(e.target.value)}
            />
            {emailValidationMessage && (
              <p className="login-page__container__form__input_email__error">
                {/*{emailValidationMessage}*/}
                Email dosen't exist
              </p>
            )}

            {/*<label>Password</label>*/}
            <input
              className="login-page__container__form__input"
              type="loginPassword"
              name="loginPassword"
              // required
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
            {loginPasswordValidationMessage && (
              <p className="login-page__container__form__input_password__error">
                {/*{loginPasswordValidationMessage}*/}
                Invalid Password
              </p>
            )}
          </div>

          <button
            className={`login-page__container__form__button`}
            // disabled={isFirstLoad ? true : !(emailValid && loginPasswordValid)}
            type="submit"
          >
            {/*SignUp to your account*/}
            Login
          </button>
        </form>
        {/*{valid && <p>Insert a value</p>}*/}
        <div className="login-page__container__text">
          <p className="login-page__container__text__p">
            Don't have an account?
          </p>
          <Link className="login-page__container__text__link" to="/signUp">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
