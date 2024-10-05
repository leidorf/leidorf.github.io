import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex py-3 border-top">
          <div className="me-auto d-flex align-items-center">
            <Link href="/" className="d-flex align-items-center">
              <img
                className="bi me-2"
                src="/assets/imgs/star.png"
                style={{ opacity: "75%", width: "19px" }}
              />
            </Link>
            <div className="text-white-50">
              <span className="copyleft me-1">&copy;</span>
              2024 leidorf ☭
            </div>
          </div>

          {/* instagram */}
          <div className="d-flex align-items-center">
            <Link
              className="text-body-secondary d-flex align-items-center"
              href="https://www.instagram.com/guraydg/"
              target="_blank"
            >
              <img
                className="bi me-3"
                src="/assets/imgs/instagram.png"
                style={{ opacity: "55%", width: "19px" }}
              />
            </Link>
          </div>

          {/* github */}
          <div className="d-flex align-items-center">
            <Link
              className="text-body-secondary d-flex align-items-center"
              href="https://github.com/leidorf"
              target="_blank"
            >
              <img
                className="bi me-3"
                src="/assets/imgs/github.jpeg"
                style={{ opacity: "55%", width: "19px" }}
              />
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
