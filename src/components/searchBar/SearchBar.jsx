import SearchSvg from "../../svg/SearchSvg.jsx";
import "./SearchBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../store/searchBarInputSlice.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SearchBar = () => {
  const searchInputValue = useSelector(
    (state) => state.searchBarInputSlice.value
  );

  const activeIcon = useSelector(
    (state) => state.navigationIconSlice.activeIcon
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(searchInputValue);

  useEffect(() => {
    if (searchInputValue === "") {
      // navigate("/dashboard/home");
      navigate(`/dashboard/${activeIcon}`);
    }
  }, [searchInputValue, navigate]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchInputValue !== "") {
      navigate("/dashboard/searchResults");
    } else {
      // navigate("/dashboard/home");
      navigate(`/dashboard/${activeIcon}`);
    }

    // console.log(dispatch(setSearchValue(e.target.value)));
    // console.log("VALUE FROM THE INPUT :", searchInputValue);
  };

  return (
    <>
      <>
        <form onSubmit={handleOnSubmit} className="searchFrom">
          <div onClick={handleOnSubmit} className="searchForm__svg">
            <SearchSvg />
          </div>
          <input
            className="searchForm__input"
            type="text"
            placeholder="Search for movies or TV series"
            value={searchInputValue}
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
          />
        </form>
        {/*<p style={{ color: "red" }}>{searchInputValue}</p>*/}
      </>
    </>
  );
};

export default SearchBar;
