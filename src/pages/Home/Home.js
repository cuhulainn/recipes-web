import React from "react";
import "./Home.css";
import MyNavbar from "../../components/MyNavbar";
import { Container } from "reactstrap";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <button>Show me a random recipe!</button>
        <button>Show me all the recipes!</button>
        <button>I want to contribute a new recipe!</button>
        <button>I want to update a recipe!</button>
      </Container>
    </React.Fragment>
  );
};

export default Home;
