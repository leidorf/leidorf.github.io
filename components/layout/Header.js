import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex py-3 mb-3 border-bottom">
          <div className="me-auto p-2">
            <Link
              href="/"
              className="d-flex align-items-center text-decoration-none link-light link-opacity-50-hover"
            >
              <img
                className="bi me-2"
                src="/assets/imgs/star.png"
                style={{ width: "25px", opacity: "75%" }}
              ></img>
              <span className="fs-4">leidorf</span>
            </Link>
          </div>
          <div className="p-3">
            <Link
              href="/works"
              className="nav-link link-light link-opacity-50-hover"
            >
              works
            </Link>
          </div>
          <div className="p-3">
            <Link
              href="/about"
              className="nav-link link-light link-opacity-50-hover"
            >
              about
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
