// import data from "../../components/data/data.json";

import data from "../../data.json";
import "./HomePage.scss";
import Card from "../../UI/Card.jsx";
import BookmarkFull from "../../../public/icon-bookmark-full.svg";
import BookmarkEmpty from "../../../public/icon-bookmark-empty.svg";
import SeriesSvg from "../../svg/SeriesSvg.jsx";
import MoviesSvg from "../../svg/MoviesSvg.jsx";
import { useState } from "react";
import PlayIconSvg from "../../svg/PlayIconSvg.jsx";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const recommendedForYou = data.filter(
    (recommendedForYou) => recommendedForYou
  );

  const trending = data.filter(
    (trendingItemCard) => trendingItemCard.isTrending === true
  );

  // console.log("trending : ", trending);

  // console.log(recommendedForYou);
  ////////////////////////////////////////////////////////////////
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % trending.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + trending.length) % trending.length
    );
  };

  return (
    <>
      <section className="trending__wrapper">
        <h2 className="trending__wrapper__header">Trending</h2>
        <div className="trending__wrapper__container">
          {trending.map((trendingItemCard, index) => (
            <div
              className="trending__wrapper__container__card"
              style={{ transform: `translateX(-${currentSlide * (80 + 4)}%)` }}
              key={index}
            >
              <img
                className="trending__wrapper__container__card__image"
                src={trendingItemCard.thumbnail.regular.small}
                alt="trending img"
              />

              {/*////////////////////////////////*/}

              <div className="trending__wrapper__container__playIcon__container">
                <div className="trending__wrapper__containerr__playIcon__container__svg">
                  <PlayIconSvg />
                </div>
                <p className="trending__wrapper__containerr__playIcon__container__text">
                  Play
                </p>
              </div>

              {/*////////////////////////////////*/}
              <div className="trending__wrapper__container__card__info">
                <div className="trending__wrapper__container__card__info__left">
                  <div className="trending__wrapper__container__card__info__left__top">
                    <p>{trendingItemCard.year}</p>
                    <div>
                      {trendingItemCard.category === "Movie" ? (
                        <MoviesSvg fill={"rgb(174, 182, 201)"} />
                      ) : (
                        <SeriesSvg fill={"rgb(174, 182, 201)"} />
                      )}
                    </div>
                    <p>{trendingItemCard.category}</p>
                  </div>
                  <div className="trending__wrapper__container__card__info__left__bottom">
                    <p>{trendingItemCard.title}</p>
                  </div>
                </div>
                <div className="trending__wrapper__container__card__info__right">
                  <p>{trendingItemCard.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="trending__wrapper__navigationButtons">
          <div
            onClick={prevSlide}
            className="trending__wrapper__navigationButtons__left"
          >
            <button>←</button>
          </div>
          <div
            onClick={nextSlide}
            className="trending__wrapper__navigationButtons__right"
          >
            <button>→</button>
          </div>
        </div>
      </section>
      <section className="recommendedForYou__wrapper">
        <h2 className="recommendedForYou__wrapper__header">
          Recommended for you
        </h2>

        <div className="recommendedForYou__wrapper__container">
          {recommendedForYou.map((recommendedForYou) => (
            <Card
              //prop that are in the reusable card are prop.key,prop.title,prop.image
              key={recommendedForYou.title}
              title={recommendedForYou.title}
              image={recommendedForYou.thumbnail.regular.small}
              bookmarked={
                recommendedForYou.isBookmarked === true
                  ? BookmarkFull
                  : BookmarkEmpty
              }
              year={recommendedForYou.year}
              category={recommendedForYou.category}
              rating={recommendedForYou.rating}
              svg={
                recommendedForYou.category === "Movie" ? (
                  <MoviesSvg fill={"rgb(174, 182, 201)"} />
                ) : (
                  <SeriesSvg fill={"rgb(174, 182, 201)"} />
                )
              }
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
