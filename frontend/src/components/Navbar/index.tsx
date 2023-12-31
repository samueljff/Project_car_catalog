import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { NavLink, Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary  main-nav">
      <div className="container-fluid main-content-nav">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carcatalog-navbar"
          aria-controls="carcatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse main-container-menu"
          id="carcatalog-navbar"
        >
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
