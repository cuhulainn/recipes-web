import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import RecipeListCard from "../../components/RecipeListCard";
import styles from "./Recipes.module.scss";

const baseUrl = "http://localhost:3001";
const recipesUrl = `${baseUrl}/recipes`;

const Recipes = ({ recipes, setRecipes, getRecipeData }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(recipesUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setRecipes(data);
      })
      .catch((err) => {
        console.error(`Error fetching recipes: ${err}`);
        setError(err);
      })
      .finally(setIsLoading(false));
  }, [setRecipes]);

  if (isLoading) {
    return <div>Warming up the oven...</div>;
  }

  if (error) {
    return (
      <div>
        The cooks messed up the order! <br /> <code>If you're a &apos;chef&apos;, check the console for details.</code>
      </div>
    );
  }

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
