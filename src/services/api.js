const HEADERS = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzhmMjBmNzFmOTIxOGJkMjhiZjViMjNkZDEyMmI4MSIsInN1YiI6IjYxMDZmMTlmY2FlNjMyMDAyZjcwMzU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u4I428l0-ivjW2aoqxoT2hDtIKn6ZAq7SONhHeVIUF0',
};

const options = {
  method: 'GET',
  headers: HEADERS,
};

export const getTrendList = async page => {
  const res = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
  if (!res.ok)
    throw new Error(
      `There is an issue with trend movies response with a status ${res.status}. Please, Try again later`
    );

  return await res.json();
};

export const getMovieById = async movieId => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  if (!res.ok)
    throw new Error(
      `Failed to load movies. Please try again later. Status code ${res.status}.`
    );

  return await res.json();
};

export const getMoviesByName = async query => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  if (!res.ok)
    throw new Error(
      `Failed to load movies. Please try again later. Status code ${res.status}.`
    );

  return await res.json();
};

export const getMovieCast = async movieId => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  if (!res.ok)
    throw new Error(
      `Failed to load cast data. Please try again later. Status code ${res.status}.`
    );

  return await res.json();
};

export const getMovieReviews = async movieId => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options);

  if (!res.ok)
    throw new Error(
      `Failed to fetch reviews. Please, try again later. Status code ${res.status}.`
    );

  return await res.json();
};
