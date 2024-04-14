import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        HOME CINEMA
      </Link>
      <nav className={css.nav}>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? `${css.button} ${css.active}` : css.button
          }
        >
          Search Movie
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
