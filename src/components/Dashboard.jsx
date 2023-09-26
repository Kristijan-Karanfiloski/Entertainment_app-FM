import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login/Login.jsx";
import Header from "./header/Header.jsx";

const Dashboard = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUsers = JSON.parse(localStorage.getItem("loggedInUser"));
    // console.log("LoggedInUsers :", loggedInUsers);
    // const loggedInUser = loggedInUsers.find((user) => user.signUpEmail);

    // console.log("LoggedInUser :", loggedInUser);
    // console.log("LoggedInUsers :", loggedInUsers);

    if (loggedInUsers && loggedInUsers.signUpEmail) {
      setUserLoggedIn(loggedInUsers.signUpEmail);
    } else {
      navigate("/");
    }

    // setUserLoggedIn(loggedInUser);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("loggedInUser"); // Or set it to null
    navigate("/");
  };

  return (
    <div>
      {userLoggedIn ? (
        <div>
          {/*<p>{userLoggedIn}</p>*/}
          {/*<button onClick={handleLogOut}>Log Out</button>*/}
          <Header userLoggedIn={userLoggedIn} handleLogOut={handleLogOut} />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Dashboard;
