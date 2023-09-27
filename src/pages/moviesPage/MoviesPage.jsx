import data1 from "../../components/data/data1.json";
import data from "../../components/data/data.json";
import photo from "../../components/data/assets/thumbnails/1998/trending/small.jpg";

const MoviesPage = () => {
  // console.log("Data :", data1);

  return (
    <>
      {/*<h1 style={{ color: "red" }}>This is coming from the movies page</h1>*/}
      {data.map((movies) => {
        // <p style={{ color: "red" }}>{movies?.thumbnail.regular.medium}</p>

        console.log("MOVIES :", movies);

        return (
          <div key={movies.title}>
            {/*<p style={{ color: "red" }}>{movies.title}</p>*/}
            <img
              style={{ color: "red" }}
              src={movies?.thumbnail.trending.small}
              alt="moviesImg"
            />
          </div>
        );
      })}
    </>
  );
};

export default MoviesPage;
