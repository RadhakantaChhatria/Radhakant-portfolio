import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="J.Crew"
              description="J.Crew Group is an American multi-brand, multi-channel, specialty retailer company which offers an assortment of women's, men's, and children's apparel and accessories.
              Tech Stack used - HTML, CSS, Javascript, React, Redux"
              link="https://github.com/yash-2507/J.Crew-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Fitmeals"
              description="Fitmeals is an Indian e-commerce food website which consists Healthy Food and Nutrition WordPress Theme created especially for Food Delivery, Healthy Food, Fitness Diet, Organic Food Store, Courier Service Nutritionist, Health Coach, Health Diet, Fitness Meal and Business Lunch Delivery.
              Tech Stack used - HTML, CSS, Javascript, Bootstrap"
              link="https://github.com/RadhakantaChhatria/Fitmeals"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PharmEasy"
              description="PharmEasy is an Indian healthcare website and ecommerce platform for consumers involved in selling online medicines, diagnostics, telehealth, online doctor consultation services, etc.
              Tech Stack used - HTML, CSS, Javascript, Bootstrap"
              link="https://github.com/thezolooo/PharmEasy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Weather App"
              description="It is mini app which shows the weather data of the city along with the location of that city in the map.
              Tech Stack used -HTML, CSS, Javascript, API "
              link="https://github.com/RadhakantaChhatria/Weather-App"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
