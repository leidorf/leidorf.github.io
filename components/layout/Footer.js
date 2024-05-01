import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <img
                className="bi"
                src="/assets/imgs/star.png"
                style={{ opacity: "75%", width: "19px" }}
              ></img>
            </Link>
            <div className="mb-3 mb-md-0 text-white-50">
              <span className="copyleft">&copy;</span>
              2024 leidorf
            </div>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            {/* instagram */}
            <li className="ms-3">
              <Link
                className="text-body-secondary"
                href="https://www.instagram.com/guraydg/"
                target="_blank"
              >
                <img
                  className="bi"
                  src="/assets/imgs/instagram.png"
                  style={{ opacity: "55%", width: "19px" }}
                ></img>
              </Link>
            </li>
            {/* github */}
            <li className="ms-3">
              <Link
                className="text-body-secondary"
                href="https://github.com/leidorf"
                target="_blank"
              >
                <img
                  className="bi"
                  src="/assets/imgs/github.jpeg"
                  style={{ opacity: "55%", width: "19px" }}
                ></img>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
