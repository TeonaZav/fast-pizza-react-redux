import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.any,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400 ";
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-200 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400 px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2.5 md:px-5 md:py-3.5 text-xs",
    round: base + "px-2.5 py-1 text-md",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;