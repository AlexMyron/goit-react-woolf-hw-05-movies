import { useState } from 'react';

import css from './MovisSearch.module.css'

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
    onSearch(query);
    setQuery('');
  };

  return (
    <section>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder="Search movies by name..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className={css.button} type="submit">Search</button>
      </form>
    </section>
  );
};

export default MovieSearch;
