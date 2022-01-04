import React from "react";
import { Row, Col, Container } from "reactstrap";
import RecipeListCard from "../../components/RecipeListCard";
import styles from "./Recipes.module.scss";

const Recipes = ({ recipes }) => {
  return (
    <Container className={styles.recipesList}>
      <Row xl="5" lg="3" md="2" xs="1">
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
  );
};

export default Recipes;
