function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info custom-nav">
        <div className="container">
          <div className="title">
          <h1> EnRoute </h1>
          </div>

          <div>
            <ul className="gap-4 d-flex nav-bar nav-links">

              <li>
                <a className="nav-link active" href="#">Home</a>
              </li>

              <li>
                <a className="nav-link active" href="#">About us</a>
              </li>

              <li>
                <a className="nav-link active" href="#">Tours</a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="destinationDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Destination
                </a>
              </li>

              <li>
                <a className="nav-link active" href="#">Gallery</a>
              </li>

              <li>
                <a className="nav-link active" href="#">Contact</a>
              </li>

              <button className="btn btn-danger ms-auto">Book Now</button>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Nav;
` `