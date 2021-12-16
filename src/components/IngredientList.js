import React from "react";
import { Container, Row, Col } from "reactstrap";

const IngredientList = ({ ingredients }) => {
  return (
    <Container>
      <Row>
        <ul>
          {ingredients.map(({ name }) => (
            //TODO: regex out text after comma in name
            <li>{name}</li>
          ))}
        </ul>
      </Row>
    </Container>
  );
};

export default IngredientList;
