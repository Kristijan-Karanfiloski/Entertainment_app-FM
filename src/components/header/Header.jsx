import "./Header.scss";
import Logo from "../../../public/assets/logo.svg";
// import BookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg";
// import BookmarkFull from "../../../public/assets/icon-bookmark-full.svg";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIcon } from "../../store/navigationIconSlice.jsx";
import HomeSvg from "../../svg/HomeSvg.jsx";
import MoviesSvg from "../../svg/MoviesSvg.jsx";
import SeriesSvg from "../../svg/SeriesSvg.jsx";
import BookmarkSvg from "../../svg/BookmarkSvg.jsx";
// import login from "../login/Login.jsx";

const Header = ({ userLoggedIn, handleLogOut }) => {
  const navigationIcon = useSelector(
    (state) => state.navigationIconSlice.activeIcon
  );
  const dispatch = useDispatch();

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

  const handleClickBookmarkIcon = (iconName) => {
    dispatch(setActiveIcon(iconName));
  };

  return (
    <>
      <nav className="navigation">
        <div className="navigation__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navigation__controls">
          {/*{Object.keys(navigationIcons).map((navigationIconButtons) => (*/}
          {/*  <button*/}
          {/*    key={navigationIconButtons}*/}
          {/*    className="navigation__controls"*/}
          {/*    onClick={() => handleClickBookmarkIcon(navigationIconButtons)}*/}
          {/*  >*/}
          {/*    {navigationIconButtons === navigationIcon*/}
          {/*      ? navigationIcons[navigationIconButtons].active*/}
          {/*      : navigationIcons[navigationIconButtons].default}*/}
          {/*  </button>*/}
          {/*))}*/}

          {Object.keys(navigationIcons).map((navigationIconButtons) => {
            console.log(
              "Current navigationIconButtons:",
              navigationIconButtons
            );
            console.log("CURRENT NAVIGATIONICON:", navigationIcon);

            return (
              <button
                key={navigationIconButtons}
                className="navigation__controls"
                //if there is no ()=> the function will be called imidietly
                onClick={() => handleClickBookmarkIcon(navigationIconButtons)}
              >
                {navigationIconButtons === navigationIcon
                  ? navigationIcons[navigationIconButtons].active
                  : navigationIcons[navigationIconButtons].default}
              </button>
            );
          })}

          {/*////////////////////////////////////////////////////////////////*/}
          {/*<button*/}
          {/*  onClick={handleClickBookmarkIcon}*/}
          {/*  className="navigation__controls navigation__controls_bookmark"*/}
          {/*>*/}
          {/*  <img*/}
          {/*    src={navigationIcon === false ? BookmarkEmpty : BookmarkFull}*/}
          {/*    alt="empty"*/}
          {/*  />*/}
          {/*</button>*/}
          {/*<button*/}
          {/*  onClick={handleClickHomeIcon}*/}
          {/*  className="navigation__controls"*/}
          {/*>*/}
          {/*  <HomeSvg fill={navigationIcon === false ? "#5A698F" : "#ffffff"} />*/}
          {/*</button>*/}
          {/*<button className="navigation__controls"></button>*/}
        </div>
        <div>
          <p>{userLoggedIn}</p>
          <button onClick={handleLogOut}>Log out</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
