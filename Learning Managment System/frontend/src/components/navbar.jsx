function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        🌍 Langolearning
      </a>

      <div className="navbar-links">
        <a href="#home" className="nav-link active">
          Home
        </a>

        <a href="#course" className="nav-link">
          Course
        </a>

        <a href="#about" className="nav-link">
          About
        </a>

        <a href="#login" className="nav-link">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;