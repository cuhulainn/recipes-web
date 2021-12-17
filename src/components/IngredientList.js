import React from "react";
import { Container, Row } from "reactstrap";

const IngredientList = ({ ingredients }) => {
  return (
    <Container>
      <Row>
        <ul>
          {ingredients.map(({ name, uuid }) => (
            //TODO: regex out text after comma in name
            // make text smaller and in columns, limit #
            <li key={uuid}>{name}</li>
          ))}
        </ul>
      </Row>
    </Container>
  );
};

export default IngredientList;
