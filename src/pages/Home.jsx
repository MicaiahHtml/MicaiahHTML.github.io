import HomeGraphic from "../components/HomeGraphic";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Introduction from "../components/Introduction";

export default function Home() {
    return (
        <div data-bs-theme="dark" id = "home" className = "home-container">
            <Container>
                <Row>
                    <Col className="home-col">
                        <Introduction/>
                    </Col>
                    <Col className="home-col">
                        <HomeGraphic/>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </div>
    )
  }
  