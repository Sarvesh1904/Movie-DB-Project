import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const SearchResultsPage = ({ match }) => {
  const { searchTerm } = match.params;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${searchTerm}&page=${page}`);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    };
    fetchMovies();
  }, [searchTerm, page]);

  return (
    <div>
      <h1>Search Results for "{searchTerm}"</h1>
      <MovieList movies={movies} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default SearchResultsPage;