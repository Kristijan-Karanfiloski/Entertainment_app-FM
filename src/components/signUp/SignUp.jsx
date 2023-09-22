import { useNavigate } from "react-router-dom";
import Logo from "../../../public/assets/logo.svg";
import "./SignUp.scss";
import { useState } from "react";

const SignUp = () => {
  // const [users, setUsers] = useState(storedItems);
  const [signUpEmail, setEmail] = useState("");
  const [signUpPassword, setPassword] = useState("");
  const [signUpEmailValidationMessage, setEmailValidationMessage] =
    useState("");
  const [signUpPasswordValidationMessage, setPasswordValidationMessage] =
    useState("");

  // const [checkIfAccountExist, setCheckIfAccountExist] = useState(initState);

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
      return "Password must be at least 6 characters long";
      // console.log("signUpEmail must be at least 6 characters");
    } else {
      console.log("Successfully");
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

    console.log({ errorMessageEmail });
    if (!errorMessageEmail && !errorMessagePassword) {
      // try {
      //   const response = await fetch("http://localhost:8000/register", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ signUpEmail, signUpPassword }),
      //   });
      //
      //   const data = await response.json();
      //   console.log(data);
      //   navigate("/routeLayout");
      //   console.log("submitted");
      // } catch (error) {
      //   console.log(error);
      // }

      existingUsers.push({ signUpEmail, signUpPassword });

      localStorage.setItem("users", JSON.stringify(existingUsers));
      // localStorage.setItem("signUpEmail", JSON.stringify(signUpEmail));
      // localStorage.setItem("signUpPassword", JSON.stringify(signUpPassword));
      // localStorage.setItem("signUp", JSON.stringify(signUpPassword));

      console.log("ACCOUNT CREATED");
      alert("ACCOUNT CREATED");
      navigate("/");
    } else {
      setEmailValidationMessage(errorMessageEmail);
      setPasswordValidationMessage(errorMessagePassword);
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
              onChange={(e) => setPassword(e.target.value)}
            />
            {!!signUpPasswordValidationMessage && (
              <p className="signUp-page__container__form__input_signUpPassword__error">
                {signUpPasswordValidationMessage}
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
            Sign up
          </button>
        </form>
        {/*{valid && <p>Insert a value</p>}*/}
        {/*<p className="signUp-page__container__text">*/}
        {/*  Don't have an account? <span>Sign Up</span>{" "}*/}
        {/*</p>*/}
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
