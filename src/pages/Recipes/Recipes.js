import React, { useState, useEffect } from "react";
import { CardGroup, Row, Col, Container } from "reactstrap";
import RecipeListCard from "../../components/RecipeListCard";

const url = "http://localhost:3001/recipes";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
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
  }, []);

  if (isLoading) {
    return <div>Warming up the oven...</div>;
  }

  if (error) {
    return (
      <div>
        The cooks messed up the order! <br /> If you're a &apos;chef&apos;,
        check the console for details.
      </div>
    );
  }

  return (
    <CardGroup>
      <Container>
        <Row md="4" sm="2" xs="1">
          {recipes.map(({ uuid, title, description, images, ingredients }) => (
            <Col>
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
