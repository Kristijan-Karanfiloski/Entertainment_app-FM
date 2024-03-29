import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/logo.svg";
import "./SignUp.scss";
import { useState } from "react";

const SignUp = () => {
  // const [users, setUsers] = useState(storedItems);
  const [signUpEmail, setEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordRepeat, setSignUpPasswordRepeat] = useState("");
  const [signUpEmailValidationMessage, setEmailValidationMessage] =
    useState("");
  const [signUpPasswordValidationMessage, setPasswordValidationMessage] =
    useState("");
  const [signUpPasswordMissMatch, setSignUpPasswordMissMatch] = useState("");

  // const checkIfAccountExist = localStorage.getItem("signUp");

  // const [signUpPasswordValid, setPasswordValid] = useState(true);
  // const [isFirstLoad, setIsFirstLoad] = useState(true);
  const navigate = useNavigate();

  // console.log("Email :", signUpEmail);
  // console.log("Password :", signUpPassword);

  // console.log(localStorage);

  // useEffect(() => {
  //   localStorage.setItem("signUpEmail", JSON.stringify(signUpEmail));
  //   localStorage.setItem("signUpPassword", JSON.stringify(signUpPassword));
  //
  //   console.log(signUpEmail, signUpPassword);
  // }, [signUpEmail, signUpPassword]);

  // useEffect(() => {
  //   if (checkIfAccountExist) {
  //     console.log("Account already exists");
  //   }
  // }, []);

  const checkIfSignUpPasswordIsValid = (signUpPassword) => {
    if (signUpPassword.length <= 5) {
      // return "Password must be at least 6 characters long";
      return "Can't be empty";
      // console.log("signUpEmail must be at least 6 characters");
    } else {
      console.log("Successfully");
    }
  };

  const checkIfPasswordMatches = (signUpPassword, signUpPasswordRepeat) => {
    if (signUpPassword === signUpPasswordRepeat) {
      return "";
    } else {
      return "Password dosent match";
    }
  };

  const checkIfEmailIsValid = (signUpEmail) => {
    const signUpEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // console.log("signUpEmail", signUpEmailRegex.test(signUpEmail));
    if (!signUpEmailRegex.test(signUpEmail)) {
      return "Invalid email";
    } else {
      console.log("Successfully");
    }
    // else if (!signUpEmail.length) {
    //   return "Can't be empty";
    // }

    // return "";
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // const loggedInUsers =
    //   JSON.parse(localStorage.getItem("loggedInUser")) || [];

    const signUpEmailExists = existingUsers.some(
      (user) => user.signUpEmail === signUpEmail
    );

    if (signUpEmailExists) {
      alert("Account with that Email already exists");
      return;
    }

    // console.log(signUpEmail);
    const errorMessageEmail = checkIfEmailIsValid(signUpEmail);
    const errorMessagePassword = checkIfSignUpPasswordIsValid(signUpPassword);
    const errorMessagePasswordDosentMatch = checkIfPasswordMatches(
      signUpPasswordRepeat,
      signUpPassword
    );

    console.log({ errorMessageEmail });
    if (
      !errorMessageEmail &&
      !errorMessagePassword &&
      !errorMessagePasswordDosentMatch
    ) {
      existingUsers.push({ signUpEmail, signUpPassword });
      // loggedInUsers.push({ signUpEmail });

      localStorage.setItem("users", JSON.stringify(existingUsers));
      localStorage.setItem("loggedInUser", JSON.stringify({ signUpEmail }));
      // localStorage.setItem("signUpEmail", JSON.stringify(signUpEmail));
      // localStorage.setItem("signUpPassword", JSON.stringify(signUpPassword));
      // localStorage.setItem("signUp", JSON.stringify(signUpPassword));

      console.log("ACCOUNT CREATED");
      alert("ACCOUNT CREATED");
      navigate("/");
    } else {
      setEmailValidationMessage(errorMessageEmail);
      setPasswordValidationMessage(errorMessagePassword);
      setSignUpPasswordMissMatch(errorMessagePasswordDosentMatch);
    }
  };
  // console.log({ signUpEmailValidationMessage });
  return (
    <div className="signUp-page">
      <div className="signUp-page__icon">
        <img src={Logo} alt="logo" />
      </div>
      <div className="signUp-page__container">
        <h1 className="signUp-page__container__title">Sign Up</h1>
        <form
          onSubmit={handleOnSubmit}
          className="signUp-page__container__form"
        >
          {/*<label>Email address</label>*/}
          <div className="signUp-page__container__form__input-container">
            <input
              className="signUp-page__container__form__input"
              type="text"
              name="username"
              // required
              // placeholder="Email address"
              placeholder="Email address"
              value={signUpEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!!signUpEmailValidationMessage && (
              <p className="signUp-page__container__form__input_signUpEmail__error">
                {signUpEmailValidationMessage}
              </p>
            )}

            {/*<label>Password</label>*/}
            <input
              className="signUp-page__container__form__input"
              type="password"
              name="signUpPassword"
              // required
              placeholder="Password"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
            {!!signUpPasswordValidationMessage && (
              <p className="signUp-page__container__form__input_signUpPassword__error">
                {signUpPasswordValidationMessage}
              </p>
            )}

            <input
              className="signUp-page__container__form__input"
              type="password"
              name="signUpPassword"
              // required
              placeholder="Repeat Password"
              value={signUpPasswordRepeat}
              onChange={(e) => setSignUpPasswordRepeat(e.target.value)}
            />
            {!!signUpPasswordMissMatch && (
              <p className="signUp-page__container__form__input_passwordMatch__error">
                {signUpPasswordMissMatch}
              </p>
            )}
          </div>

          <button
            // onClick={() => {
            //   validateForm();
            // }}
            className={`signUp-page__container__form__button`}
            // disabled={isFirstLoad ? true : !(signUpEmailValid && signUpPasswordValid)}
            type="submit"
          >
            {/*SignUp to your account*/}
            CREATE ACCOUNT
          </button>
        </form>
        <div className="signUp-page__container__text">
          <p className="signUp__container__text__p">Already have an account?</p>
          <Link className="signUp-page__container__text__link" to="/">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// try {
//   const response = await fetch('http://localhost:8000/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ signUpEmail, signUpPassword })
//   });
//
//   const data=await response.json();
//   console.log(data)
