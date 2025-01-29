import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import ztext from "../../Assets//Projects/ztext.png"
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import store_Front from "../../Assets/Projects/store_Front.png"
import bytebybyte from "../../Assets/Projects/blog.png";

const Projects: React.FC = () => {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              ghLink="https://github.com/tamjidzihan"
              demoLink="https://demo.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bytebybyte}
              isBlog={false}
              title="Byte-by-Byte"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/tamjidzihan/byte_by_byte"
              demoLink="https://bytebybyteblog.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ztext}
              isBlog={false}
              title="Auth manager"
              description="Building a modern password management web app with React, Vite, TypeScript, Material UI, and Firebase Firestore as the backend. It ensures secure storage, retrieval, and management of sensitive user credentials."
              ghLink="https://github.com/tamjidzihan/ztext"
              demoLink="https://ztext.netlify.app/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Text AI"
              description="A text file translation microservice using FastAPI. This service will allow users to upload a text file, select a target language, and download a translated file. Use WebSocket for real-time status updates, background tasks for processing, MongoDB Atlas to save user history, and an LLM API (e.g., Gemini, free tier) for translation.
"
              ghLink="https://github.com/tamjidzihan/translation-microservice"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://translation-microservice.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store_Front}
              isBlog={false}
              title="StoreFront: Scalable E-Commerce Backend"
              description="A robust Django backend with JWT authentication, API support, and scalable architecture for managing products, orders, and users. 🚀#Django #Ecommerce #RESTAPI #JWT #Backend"
              ghLink="https://github.com/tamjidzihan/Store_Front_django"
            // demoLink="<Include a demo link here>"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using the 'FER-2013 dataset' with Keras and TensorFlow. Successfully predicted different types of human emotions. Achieved 60.1% accuracy. Used Open-CV to detect faces in images and passed the face to the classifier to predict the emotion."
              ghLink="https://github.com/tamjidzihan"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="<Include a demo link here>"
              demoLink="https://demo.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
