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
                  <img alt="Güray Dağ" style={{width:'500px'}} src="/assets/imgs/lain.jpeg"></img>
                </Link>
                <h5>
                  Güray Dağ <br />
                  (me)
                </h5>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
