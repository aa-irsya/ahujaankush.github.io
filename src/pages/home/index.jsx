import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
        <section id="home" className="home">
        <div className="sec d-block d-flex align-items-center">
          <div className="text w-100 h-100 d-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto text-center">
                <h1 className="mb-2x">{introdata.title}</h1>
                <h2 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                      delay: 150,
                    }}
                  />
                </h2>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/blog" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Blog
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
