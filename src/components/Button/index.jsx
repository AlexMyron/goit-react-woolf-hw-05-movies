import { NavLink } from 'react-router-dom';

import css from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? `button ${css.active}` : 'button')}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default Button;
