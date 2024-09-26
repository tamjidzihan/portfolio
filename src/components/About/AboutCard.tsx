import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tamzid Islam Zihan </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            I am currently working as a freelance software developer, focusing on creating impactful solutions for various projects.
            <br />

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dedicated to building impactful solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tamzid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
