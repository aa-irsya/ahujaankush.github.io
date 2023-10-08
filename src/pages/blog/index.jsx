import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { BasicWebContainer } from "../../components/BasicWebContainer";
import transition from "../../app/transition";

const Blog = ({theme}) => {
  console.log(theme)
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blog | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <BasicWebContainer>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Blog</h1>
              <p>Work in progress....</p>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <div className="mb-5 blog_items_ho">
            {dataportfolio.map((data, i) => {
              return (
                <div key={i} className="blog_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p>{data.description}</p>
                    <a href={data.link}>view entry</a>
                  </div>
                </div>
              );
            })}
          </div>
        </BasicWebContainer>
      </Container>
    </HelmetProvider>
  );
};

export default transition(Blog)
