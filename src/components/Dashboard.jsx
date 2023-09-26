import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login/Login.jsx";
import Header from "./header/Header.jsx";
import SearchBar from "./searchBar/SearchBar.jsx";
import "./Dashboard.scss";

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
        <div className="dashboard__container">
          <div className="dashboard__container_header">
            <Header userLoggedIn={userLoggedIn} handleLogOut={handleLogOut} />
          </div>
          <div className="dashboard__container_right">
            <div className="dashboard__container_searchBar">
              <SearchBar />
            </div>
            <div className="dashboard__container_mainContent">
              <section>
                <h1 style={{ color: "red" }}>Trending CONTENT</h1>
              </section>
              {/* Main Content */}
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Dashboard;
