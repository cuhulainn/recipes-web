import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Container style={{ height: "100vh" }}>
        <Row style={{ height: "100%" }}>
          <Col sm="6" xs="12">
            <div className={styles.buttonContainer}>
              <div>
                <Link to="/recipes">
                  <Button className={styles.homePageButton}>
                    <h1 className="display-6">check out all our recipes</h1>
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/addrecipe">
                  <Button className={styles.homePageButton}>
                    <h1 className="display-6">add your own flavor</h1>
                  </Button>
                </Link>
              </div>
              <div>
                <Button className={styles.homePageButton} disabled>
                  <h1 className="display-6">improve a recipe</h1>
                  <small>(coming soon!)</small>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
