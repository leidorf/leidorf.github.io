import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            href="/"
            className="d-flex align-items-center me-md-auto text-decoration-none link-light link-opacity-50-hover"
          >
            <img
              className="bi me-2"
              src="/assets/imgs/star.png"
              style={{ width: "25px", opacity:"75%" }}
            ></img>
            <span className="fs-4">leidorf</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-link">
              <Link href="/works" className="nav-link link-light link-opacity-50-hover">
                works
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/about" className="nav-link link-light link-opacity-50-hover">
                about
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
