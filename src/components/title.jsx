import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Typewriter from "typewriter-effect";

function TitleContainer() {
  return (
    <Container className="p-4 mt-4 mb-5">
      <Row className="d-flex">
        <Col lg={3}>
          <Image
            className="pt-4 mt-2"
            src="https://iili.io/bcIzYB.th.png"
            alt="profile-img"
            fluid="true"
          />
        </Col>
      </Row>
      <Row>
        <h2 className="mt-4 pt-4">Hello, I am Shubham Kaushal</h2>
      </Row>
      <Row className="mb-4">
        <h1>
          <p
            className="typewriter"
            data-period="2000"
            data-type='[ "Web Developer", "Programmer", "Gaming enthusiast."]'
          >
            <span className="wrap"></span>
          </p>
        </h1>
        <Typewriter
          options={{
            strings: ["Web Developer", "Programmer", "Gaming Enthusiast"],
            autoStart: true,
            loop: true,
          }}
        />
      </Row>
    </Container>
  );
}

export default TitleContainer;
