import data from "../../components/data/data.json";
import BookmarkFull from "../../../public/icon-bookmark-full.svg";
import BookmarkEmpty from "../../../public/icon-bookmark-empty.svg";
import SeriesSvg from "../../svg/SeriesSvg.jsx";
import Card from "../../UI/Card.jsx";
import "./Bookmarked.scss";
import MoviesSvg from "../../svg/MoviesSvg.jsx";

const BookmarkedPage = () => {
  const bookmarkedCategoryTvSeries = data.filter((bookmarkedTvSeries) => {
    // console.log("bookmarked :", bookmarkedTvSeries);
    return bookmarkedTvSeries.category === "TV Series";
  });
  const bookmarkedCategoryMovies = data.filter((bookmarkedTvSeries) => {
    // console.log("bookmarked :", bookmarkedTvSeries);
    return bookmarkedTvSeries.category === "Movie";
  });

  // console.log("bookmarked category TV SERIES :", bookmarkedCategoryTvSeries);

  return (
    <>
      <section className="categoryMovies__wrapper">
        <h2 className="categoryMovies__wrapper_header">Bookmarked Movies</h2>
        <div className="categoryMovies__wrapper__container">
          {bookmarkedCategoryMovies
            .filter(
              (bookmarkedMovies) => bookmarkedMovies.isBookmarked === true
            )
            .map((bookmarkedMovies) => {
              return (
                <Card
                  //prop that are in the reusable card are prop.key,prop.title,prop.image
                  key={bookmarkedMovies.title}
                  title={bookmarkedMovies.title}
                  image={bookmarkedMovies.thumbnail.regular.small}
                  bookmarked={bookmarkedMovies ? BookmarkFull : BookmarkEmpty}
                  year={bookmarkedMovies.year}
                  category={bookmarkedMovies.category}
                  rating={bookmarkedMovies.rating}
                  svg={<MoviesSvg fill={"rgb(174, 182, 201)"} />}
                />
              );
            })}
        </div>
      </section>
      <section className="categorySeries__wrapper">
        <h2 className="categorySeries__wrapper_header">Bookmarked Tv Series</h2>
        <div className="categorySeries__wrapper__container">
          {bookmarkedCategoryTvSeries
            .filter(
              (bookmarkedSeries) => bookmarkedSeries.isBookmarked === true
            )
            .map((bookmarkedTvSeries) => {
              return (
                <Card
                  //prop that are in the reusable card are prop.key,prop.title,prop.image
                  key={bookmarkedTvSeries.title}
                  title={bookmarkedTvSeries.title}
                  image={bookmarkedTvSeries.thumbnail.regular.small}
                  bookmarked={bookmarkedTvSeries ? BookmarkFull : BookmarkEmpty}
                  year={bookmarkedTvSeries.year}
                  category={bookmarkedTvSeries.category}
                  rating={bookmarkedTvSeries.rating}
                  svg={<SeriesSvg fill={"rgb(174, 182, 201)"} />}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default BookmarkedPage;
