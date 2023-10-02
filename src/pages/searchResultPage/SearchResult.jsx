import data from "../../components/data/data.json";
import { useSelector } from "react-redux";
import Card from "../../UI/Card.jsx";
import BookmarkFull from "../../../public/icon-bookmark-full.svg";
import BookmarkEmpty from "../../../public/icon-bookmark-empty.svg";
import MoviesSvg from "../../svg/MoviesSvg.jsx";
import SeriesSvg from "../../svg/SeriesSvg.jsx";
import "./SearchResult.scss";

const SearchResult = () => {
  const searchInputValue = useSelector(
    (state) => state.searchBarInputSlice.value
  );

  const searchResult = data.filter((movieTitle) =>
    movieTitle.title.toLowerCase().includes(searchInputValue)
  );

  // console.log("FROM THE SEARCH RESULT :", searchResult);
  // console.log("FROM THE SEARCH RESULT :", searchInputValue);

  return (
    <>
      {searchResult.length > 0 ? (
        <main className="searchResult__wrapper">
          {searchResult.map((searchResultItem) => (
            <Card
              key={searchResultItem.title}
              title={searchResultItem.title}
              image={searchResultItem.thumbnail.regular.small}
              bookmarked={
                searchResultItem.isBookmarked === true
                  ? BookmarkFull
                  : BookmarkEmpty
              }
              year={searchResultItem.year}
              category={searchResultItem.category}
              rating={searchResultItem.rating}
              svg={
                searchResultItem.category === "Movie" ? (
                  <MoviesSvg fill={"rgb(174, 182, 201)"} />
                ) : (
                  <SeriesSvg fill={"rgb(174, 182, 201)"} />
                )
              }
            />
          ))}
        </main>
      ) : (
        <div
          className="noResults__container"
          // style={{ display: "grid", placeItems: "center" }}
        >
          <p className="noResults__container__text">
            No results matching your search!
          </p>
        </div>
      )}
    </>
  );
};

export default SearchResult;
