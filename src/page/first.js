import React from "react";
import Card from "react-bootstrap/Card";
import { Animated } from "react-animated-css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
///import Chart from "../components/chart";
export default function first(props) {
  console.log(props.isDarkMode);

  return (
    <>
      <Animated
        animationIn="fadeInUp"
        animationInDuration={1000}
        isVisible={true}
      >
        <Container>
          <div className="container">
            <h1 className="texttitle">ชั้น 1</h1>

            <Row>
              <Col xs="12" md="4" xl="4">
                <Card bg="primary" text="light" className="card">
                  <Card.Header className="crd-header">จำนวนรถเข้า</Card.Header>
                  <Card.Body>
                    <Card.Text className="crd-header">
                      <h1>2</h1>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs="12" md="4" xl="4">
                <Card bg="danger" text="light" className="card">
                  <Card.Header className="crd-header">
                    จำนวนรถที่ออก
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="crd-header">
                      <h1>1</h1>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs="12" md="4" xl="4">
                <Card bg="success" text="light" className="card">
                  <Card.Header className="crd-header">ที่จอดว่าง</Card.Header>
                  <Card.Body>
                    <Card.Text className="crd-header">
                      <h1>29</h1>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Animated>
    </>
  );
}
