import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <Link
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <img class="bi" width="19" src="/assets/imgs/star.png" style={{opacity:"75%"}}></img>
            </Link>
            <div class="mb-3 mb-md-0 text-white-50">
              <span className="copyleft">&copy;</span>
              2024 leidorf
            </div>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            {/* instagram */}
            <li class="ms-3">
              <Link
                class="text-body-secondary"
                href="https://www.instagram.com/guraydg/"
              >
                <img
                  class="bi"
                  width="19"
                  src="/assets/imgs/instagram.png"
                  style={{opacity:'55%'}}
                ></img>
              </Link>
            </li>
            {/* github */}
            <li class="ms-3">
              <Link class="text-body-secondary" href="https://github.com/leidorf">
                <img class="bi" width="19" src="/assets/imgs/github.jpeg" style={{opacity:'55%'}}></img>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
