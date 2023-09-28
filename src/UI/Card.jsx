import "./Card.scss";

////////////////////////////////////////////////////////////////
// REUSABLE CHILD CARD

const Card = ({ title, image, bookmarked, year, category, rating, svg }) => {
  // Now I can directly use `title`, `image`, etc.
  // No need to write `props.title`, `props.image`, etc.
  return (
    <>
      <div key={title} className="card">
        <div className="card__image-wrapper">
          <img
            className="card__image"
            src={image}
            // src={movie.thumbnail}
            alt="Movie Poster"
          />
          <div className="icon">
            <img src={bookmarked} alt="bookmark icon" />
            {/*{movie.isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}*/}
          </div>
        </div>
        <div className="card__info">
          <div className="card__detail card__detail--year">{year}</div>
          <div className="card__detail card__detail--category">
            {svg}
            {category}
          </div>
          <div className="card__detail card__detail--rating">{rating}</div>
        </div>
        <p className="card__name">{title}</p>
      </div>
    </>
  );
};

export default Card;
