import Link from "next/link";
import React from "react";
import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";

const About = () => {
  return (
    <>
      <Layout>
        <PageHead headTitle="about"></PageHead>
        <section className="section">
          <div className="container col text-center">
            <ul className="list-unstyled d-flex mt-5">
              <li className="col">
                <Link
                  href="https://github.com/leidorf"
                  className="text-info nav-link mb-4"
                >
                  <img
                    alt="güray dağ"
                    style={{ width: "350px" }}
                    src="https://avatars.githubusercontent.com/u/93585259?v=4"
                  ></img>
                </Link>
                <p className="text-light h5">
                  güray dağ <br />
                  (me)
                </p>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
