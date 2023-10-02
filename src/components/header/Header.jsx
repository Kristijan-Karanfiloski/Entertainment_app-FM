import "./Header.scss";
import Logo from "../../../public/logo.svg";
import ImgAvatar from "../../../public/image-avatar.png";
// import BookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg";
// import BookmarkFull from "../../../public/assets/icon-bookmark-full.svg";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIcon } from "../../store/navigationIconSlice.jsx";
import HomeSvg from "../../svg/HomeSvg.jsx";
import MoviesSvg from "../../svg/MoviesSvg.jsx";
import SeriesSvg from "../../svg/SeriesSvg.jsx";
import BookmarkSvg from "../../svg/BookmarkSvg.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import login from "../login/Login.jsx";

const Header = ({ userLoggedIn, handleLogOut }) => {
  const [logOut, setLogOut] = useState(false);

  const navigationIcon = useSelector(
    (state) => state.navigationIconSlice.activeIcon
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigationIcons = {
    home: {
      default: <HomeSvg fill={"#5A698F"} />,
      active: <HomeSvg fill={"#ffffff"} />,
    },
    movies: {
      default: <MoviesSvg fill={"#5A698F"} />,
      active: <MoviesSvg fill={"#ffffff"} />,
    },
    series: {
      default: <SeriesSvg fill={"#5A698F"} />,
      active: <SeriesSvg fill={"#ffffff"} />,
    },
    bookmarks: {
      default: <BookmarkSvg fill={"#5A698F"} />,
      active: <BookmarkSvg fill={"#ffffff"} />,
    },
  };

  //    This effect runs only once (because the dependency array is empty).
  //     It retrieves an item from localStorage called ACTIVE_ICON.
  //     It parses that item to JSON and logs it to the console.
  //     If the parsed data exists, it dispatches an action to update some state and navigates to a
  //     new page using the parsed data.
  //     The  effect  serve as an initializer. When the component mounts, it tries to retrieve
  //   the last active icon from localStorage, apply it to the state, and navigate the user to the corresponding
  //  dashboard page.

  useEffect(() => {
    const data = window.localStorage.getItem("ACTIVE_ICON");
    const parsedData = JSON.parse(data);
    // console.log("Retrieved from localStorage:", parsedData);
    if (parsedData) {
      dispatch(setActiveIcon(parsedData));
      navigate(`/dashboard/${parsedData}`);
    }
  }, []);

  ////////////////////////////////////////////////////////////////////////

  //    The second effect is a "saver." Whenever the navigationIcon changes, it updates the localStorage
  //     to ensure the latest state is saved.
  //    This effect runs whenever navigationIcon changes (because navigationIcon is specified in the dependency array).
  //     It saves the value of navigationIcon into localStorage after stringifying it.
  //     It also logs the value of navigationIcon to the console.

  // useEffect(() => {
  //   window.localStorage.setItem("ACTIVE_ICON", JSON.stringify(navigationIcon));
  //   console.log("NAVIGATION ICON", navigationIcon);
  // }, [navigationIcon]);

  ////////////////////////////////////////////////////////////////////////////////////////////////

  // console.log(navigationIcon);
  // console.log("WITHOUT MAP METHOD :", Object.keys(navigationIcons));
  // console.log(
  //   "WITH MAP METHOD :",
  //   Object.keys(navigationIcons).map((btns) => {
  //     console.log(btns);
  //     return btns;
  //   })
  // );

  // console.log("NAVIGATION ICON", navigationIcon);

  const handleLogOutUser = () => {
    setLogOut(!logOut);
  };

  const handleChangeOnActiveIcon = (iconName) => {
    window.localStorage.setItem("ACTIVE_ICON", JSON.stringify(iconName));
    // console.log("NAVIGATION ICON", navigationIcon);
    dispatch(setActiveIcon(iconName));
    navigate(`/dashboard/${iconName}`);
  };

  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navigation__controls">
          {Object.keys(navigationIcons).map((navigationIconButtons) => {
            // console.log(
            //   "Current navigationIconButtons:",
            //   navigationIconButtons
            // );
            // console.log("CURRENT NAVIGATIONICON:", navigationIcon);

            return (
              <button
                key={navigationIconButtons}
                className="navigation__controls"
                //if there is no ()=> the function will be called imidietly
                onClick={() => handleChangeOnActiveIcon(navigationIconButtons)}
              >
                {navigationIconButtons === navigationIcon
                  ? navigationIcons[navigationIconButtons].active
                  : navigationIcons[navigationIconButtons].default}
              </button>
            );
          })}

          {/*////////////////////////////////////////////////////////////////*/}
        </div>
        <div className="navigation__avatar__container">
          {/*<p>{userLoggedIn}</p>*/}
          {logOut && (
            <div
              onClick={handleLogOut}
              className="navigation__avatar__container__logout__container"
            >
              <p className="navigation__avatar__container__logout__container__text">
                Log Out
              </p>
            </div>
          )}
          <div
            onClick={handleLogOutUser}
            className="navigation__avatar__container__icon"
          >
            <img src={ImgAvatar} alt="img-avatar" />
          </div>
          {/*<button onClick={handleLogOut}>Log out</button>*/}
        </div>
      </nav>
    </>
  );
};

export default Header;
