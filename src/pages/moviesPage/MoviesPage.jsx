// import data from "../../components/data/data.json";
import data from "../../data.json";
import "./MoviesPage.scss";
import MoviesSvg from "../../svg/MoviesSvg.jsx";
import BookmarkFull from "../../../public/icon-bookmark-full.svg";
import BookmarkEmpty from "../../../public/icon-bookmark-empty.svg";
import Card from "../../UI/Card.jsx";

const MoviesPage = () => {
  // console.log("DATA JSON :", data);
  const moviesData = data.filter((categoryMovies) => {
    // console.log("categoryMovies", categoryMovies);
    return categoryMovies.category === "Movie";
  });

  // const movieBookmarked = movie.isBookmarked;

  // console.log(BookmarkFull);
  // console.log("CATEGORY MOVIE :", moviesData);
  // console.log("Is BOOKMARKED :", movieBookmarked);
  // console.log("Data :", data1);

  ////////////////////////////////////////////////////////////////

  return (
    <>
      <h2 className="movie-card__header">Movies</h2>
      <div className="movie-card__wrapper">
        {moviesData.map((categoryMovie) => (
          <Card
            //prop that are in the reusable card are prop.key,prop.title,prop.image
            key={categoryMovie.title}
            title={categoryMovie.title}
            image={categoryMovie.thumbnail.regular.small}
            bookmarked={
              categoryMovie.isBookmarked === true ? BookmarkFull : BookmarkEmpty
            }
            year={categoryMovie.year}
            category={categoryMovie.category}
            rating={categoryMovie.rating}
            svg={<MoviesSvg fill={"rgb(174, 182, 201)"} />}
          />
        ))}
      </div>
    </>
  );

  // <div key={movie.title} className="movie-card">
  //   <div className="movie-card__image-wrapper">
  //     <img
  //       className="movie-card__image"
  //       src={movie.thumbnail.regular.small}
  //       // src={movie.thumbnail}
  //       alt="Movie Poster"
  //     />
  //     <div className="icon">
  //       <img
  //         src={movie.isBookmarked === true ? BookmarkFull : BookmarkEmpty}
  //         alt="bookmark icon"
  //       />
  //       {/*{movie.isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}*/}
  //     </div>
  //   </div>
  //   <div className="movie-card__info">
  //     <div className="movie-card__detail movie-card__detail--year">
  //       {movie.year}
  //     </div>
  //     <div className="movie-card__detail movie-card__detail--category">
  //       <MoviesSvg fill={"rgb(174, 182, 201)"} />
  //       {movie.category}
  //     </div>
  //     <div className="movie-card__detail movie-card__detail--rating">
  //       {movie.rating}
  //     </div>
  //   </div>
  //   <p className="movie-card__name">{movie.title}</p>
  // </div>

  ////////////////////////////////////////////////////////////////

  // return (
  //   <>
  //     <h2 className="movie-card__header">Movies</h2>
  //     <div className="movie-card__wrapper">{movies}</div>
  //   </>
  // );
};

export default MoviesPage;
