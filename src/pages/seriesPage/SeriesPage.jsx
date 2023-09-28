import data from "../../components/data/data.json";
import Card from "../../UI/Card.jsx";
import BookmarkFull from "../../../public/icon-bookmark-full.svg";
import BookmarkEmpty from "../../../public/icon-bookmark-empty.svg";
import SeriesSvg from "../../svg/SeriesSvg.jsx";
import "./SeriesPage.scss";
const SeriesPage = () => {
  // console.log("data", data);

  const tvSeriesData = data.filter((categoryTvSeries) => {
    // console.log("categoryTvSeries", categoryTvSeries);
    return categoryTvSeries.category === "TV Series";
  });

  // console.log("TV SERIES :", tvSeriesData);

  // const tvSeries = tvSeriesData.map((categoryTv) => (
  //   <Card
  //     key={categoryTv.title}
  //     title={categoryTv.title}
  //     image={categoryTv.thumbnail.regular.small}
  //     bookmarked={
  //       categoryTv.isBookmarked === true ? BookmarkFull : BookmarkEmpty
  //     }
  //     year={categoryTv.year}
  //     category={categoryTv.category}
  //     rating={categoryTv.rating}
  //     svg={<SeriesSvg />}
  //   />
  // ));

  return (
    <>
      <h2 className="tvSeries-card__header">Movies</h2>
      <div className="tvSeries__container">
        {tvSeriesData.map((categoryTv) => (
          <Card
            key={categoryTv.title}
            title={categoryTv.title}
            image={categoryTv.thumbnail.regular.small}
            bookmarked={
              categoryTv.isBookmarked === true ? BookmarkFull : BookmarkEmpty
            }
            year={categoryTv.year}
            category={categoryTv.category}
            rating={categoryTv.rating}
            svg={<SeriesSvg />}
          />
        ))}
      </div>
    </>
  );
};

export default SeriesPage;
