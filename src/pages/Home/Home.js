import React from "react";
import "./Home.css";
import MyNavbar from "../../components/MyNavbar";
import { Container } from "reactstrap";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <MyNavbar />
      </Container>
    </React.Fragment>
  );
};

export default Home;
