import SearchSvg from "../../svg/SearchSvg.jsx";
import "./SearchBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../store/searchBarInputSlice.jsx";

const SearchBar = () => {
  const searchInputValue = useSelector(
    (state) => state.searchBarInputSlice.value
  );
  const dispatch = useDispatch();

  // console.log(searchInputValue);

  return (
    <>
      <>
        <form className="searchFrom">
          <div className="searchForm__svg">
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
        <p style={{ color: "red" }}>{searchInputValue}</p>
      </>
    </>
  );
};

export default SearchBar;
