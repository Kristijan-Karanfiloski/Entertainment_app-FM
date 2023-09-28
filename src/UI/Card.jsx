// import BookmarkFull from "../../public/icon-bookmark-full.svg";
// import BookmarkEmpty from "../../public/icon-bookmark-empty.svg";
// import  from "../svg/MoviesSvg.jsx";

// import BookmarkFull from "../../public/icon-bookmark-full.svg";
// import BookmarkEmpty from "../../public/icon-bookmark-empty.svg";
import "./Card.scss";
// import BookmarkFull from "../../public/icon-bookmark-full.svg";
// import BookmarkEmpty from "../../public/icon-bookmark-empty.svg";
// import MoviesSvg from "../svg/MoviesSvg.jsx";

const Card = (props) => {
  return (
    // <>
    //   <div key={props.title} className="card">
    //     <div className="card__image-wrapper">
    //       <img
    //         className="card__image"
    //         src={props.image}
    //         // src={movie.thumbnail}
    //         alt="Movie Poster"
    //       />
    //       <div className="icon">
    //         <img src={props.bookmarked} alt="bookmark icon" />
    //       </div>
    //     </div>
    //     <div className="card__info">
    //       <div className="card__detail card__detail--year">{props.year}</div>
    //       <div className="card__detail card__detail--category">
    //         {props.svg}
    //         {props.category}
    //       </div>
    //       <div className="card__detail card__detail--rating">
    //         {props.rating}
    //       </div>
    //     </div>
    //
    //     <p className="card__name">{props.title}</p>
    //   </div>
    // </>

    <>
      <div key={props.title} className="card">
        <div className="card__image-wrapper">
          <img
            className="card__image"
            src={props.image}
            // src={movie.thumbnail}
            alt="Movie Poster"
          />
          <div className="icon">
            <img src={props.bookmarked} alt="bookmark icon" />
            {/*{movie.isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}*/}
          </div>
        </div>
        <div className="card__info">
          <div className="card__detail card__detail--year">{props.year}</div>
          <div className="card__detail card__detail--category">
            {/*<MoviesSvg fill={"rgb(174, 182, 201)"} />*/}
            {props.category}
          </div>
          <div className="card__detail card__detail--rating">
            {props.rating}
          </div>
        </div>
        <p className="card__name">{props.title}</p>
      </div>
    </>
  );

  // return (
  //   <>
  //     <h2 className="movie-card__header">Movies</h2>
  //     <div className="movie-card__wrapper">{movies}</div>
  //   </>
  // );
};

export default Card;
