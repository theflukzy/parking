import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Chart from "../components/chart";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Animated } from "react-animated-css";


const Home = () => {
  const history = useHistory();
  const handleClickST = () => history.push("/1st_floor");
  const handleClickND = () => history.push("/2nd_floor");
  const handleClickTH = () => history.push("/3th_floor");

  return (
    <>
      <Animated
        animationIn="fadeInUp"
        animationInDuration={1000}
        isVisible={true}
      >
        <div className="container">
          <div>
            <Container>
              <h1 className="texttitle">DASHBOARD</h1>
              <Row>
                <Col xs="12" md="4" xl="4">
                  <Card bg="primary" text="light" className="card">
                    <Card.Header className="crd-header">
                      จำนวนรถเข้า (รวม)
                    </Card.Header>
                    <Card.Body>
                      <Card.Text className="crd-header">
                        <h1 className="number">32</h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs="12" md="4" xl="4">
                  <Card bg="danger" text="light" className="card">
                    <Card.Header className="crd-header">
                      จำนวนรถที่ออก (รวม)
                    </Card.Header>
                    <Card.Body>
                      <Card.Text className="crd-header">
                        <h1 className="number">2</h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs="12" md="4" xl="4">
                  <Card bg="success" text="light" className="card">
                    <Card.Header className="crd-header">
                      ที่จอดว่าง (รวม)
                    </Card.Header>
                    <Card.Body>
                      <Card.Text className="crd-header">
                        <h1 className="number">60</h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
            <br />
          </div>
        </div>
        <div className="container">
          <Chart className="card" />
          <br />
        </div>

        <div className="container">
          <div>
            <Container>
              <Row>
                <Col xs="12" md="4" xl="4">
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <Card bg="info" text="light">
                          <Card.Header className="crd-header">
                            ที่จอดว่าง ชั้น 1
                          </Card.Header>
                          <Card.Body>
                            <Card.Text className="crd-header">
                              <h1>29</h1>
                            </Card.Text>
                            <Button variant="warning" onClick={handleClickST}>
                              Go to 1st floor
                            </Button>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs="12" md="4" xl="4">
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <Card bg="info" text="light" className="card">
                          <Card.Header className="crd-header">
                            ที่จอดว่าง ชั้น 2
                          </Card.Header>
                          <Card.Body>
                            <Card.Text className="crd-header">
                              <h1>2</h1>
                            </Card.Text>
                            <Button variant="warning" onClick={handleClickND}>
                              Go to 2nd floor
                            </Button>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs="12" md="4" xl="4">
                  <div className="card">
                    <div className="box">
                      <div className="content">
                        <Card bg="info" text="light" className="card">
                          <Card.Header className="crd-header">
                            {" "}
                            ที่จอดว่าง ชั้น 3
                          </Card.Header>
                          <Card.Body>
                            <Card.Text className="crd-header">
                              <h1>29</h1>
                            </Card.Text>
                            <Button variant="warning" onClick={handleClickTH}>
                              Go to 3th floor
                            </Button>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Animated>
    </>
  );
};
export default Home;
