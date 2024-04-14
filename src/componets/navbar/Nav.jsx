import "./nav.css";
const Header = () => {
    return (
      <div className="header">
        <nav>
          <div>logo</div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/contact">Blog</a>
            </li>
          </ul>
          <div> search</div>
        </nav>
      </div>
    );
  };
  
  export default Header;
  