import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../utils/Header";
import MovieCard from "../Pages/MovieCard";
import Footer from "../utils/Footer";

function Home() {
  const [items, setItems] = useState();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => setPage(page - 1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      )
      .then((response) => {
        setItems(response.data.results);
      })
      .catch((error) => error);
  });

  return (
    <>
      <Header />
      <div className="mt-10 ">
        <div className="grid grid-cols-1 place-content-center p-5 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4">
          {items &&
            items.map((items) => (
              <>
                <>
                  <MovieCard key={items.id} {...items} />
                </>
              </>
            ))}
        </div>
        <div className="pagination">
          {page > 1 && <button onClick={handlePrevPage}>Previous</button>}
          <button style={{color:"white", display:"flex", width:"10%"}} onClick={handleNextPage}>Next</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
