import React from "react";
import { CardGroup, Row, Col, Container } from "reactstrap";
import RecipeListCard from "../../components/RecipeListCard";

const Recipes = ({ recipes }) => {
  return (
    <CardGroup>
      <Container>
        <Row md="4" sm="2" xs="1">
          {recipes.map(({ uuid, title, description, images, ingredients }) => (
            <Col key={uuid}>
              <RecipeListCard
                uuid={uuid}
                title={title}
                description={description}
                images={images}
                ingredients={ingredients}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </CardGroup>
  );
};

export default Recipes;
