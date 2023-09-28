import "./Card.scss";

////////////////////////////////////////////////////////////////
// REUSABLE CHILD CARD

const Card = (props) => {
  console.log(props);
  return (
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
            {props.svg}
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
};

export default Card;
