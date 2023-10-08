import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { logo, introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import transition from "../../app/transition";

export const Home = ({ theme }) => {
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
              <div className="intro">
                <div
                  className={"logo"}
                  style={{
                    WebkitMaskImage: `url(${logo.img})`,
                    maskImage: `url(${logo.img})`,
                  }}
                  alt="logo"
                ></div>
                <div className="content">
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
                  <div className="intro_btn-action pb-5">
                    <Link to="/about">
                      <div className="ac_btn btn page_bg__blur">About Me</div>
                    </Link>
                    <Link to="/blog" className="text_2">
                      <div className="ac_btn btn page_bg__blur">My Blog</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default transition(Home)
