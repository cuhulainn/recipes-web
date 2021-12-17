import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardTitle } from "reactstrap";
import "./RecipeDetail.css";

const baseImgUrl = "http://localhost:3001";

const RecipeDetail = ({ id, recipes }) => {
  const [recipe, setRecipe] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (recipes.length > 0) {
      setRecipe(recipes.filter((recipe) => recipe.uuid === id)[0]);
      setIsLoading(false);
    } else {
      fetch(`http://localhost:3001/recipes/`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setRecipe(data.filter((recipe) => recipe.uuid === id)[0]);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(`Error fetching recipe: ${err}`);
        });
    }
  }, [id, recipes]);

  if (isLoading) {
    return <div>Warming up the oven...</div>;
  }

  return (
    <Container>
      <Row xs="1">
        <Col>
          <h1 className="display-3">{recipe.title}</h1>
          <h4 className="display-6 text-muted">{recipe.description}</h4>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="8">
          <img
            src={`${baseImgUrl}${recipe.images.full}`}
            alt={recipe.title}
            width="100%"
          />
        </Col>
        <Col xs="12" md="4">
          <Card>
            <CardTitle tag="h4">Prep Info</CardTitle>
            <p className="fs-5">
              <strong>Total: </strong>{" "}
              {`${recipe.cookTime + recipe.prepTime} mins`}
            </p>
            <div className="indent">
              <p>
                <strong>Prep: </strong> {`${recipe.prepTime} mins`}
              </p>
              <p>
                <strong>Cook: </strong> {`${recipe.cookTime} mins`}
              </p>
            </div>
            <p className="fs-5">
              <strong>Servings: </strong> {`${recipe.servings}`}
            </p>
          </Card>
        </Col>
      </Row>
      <Row xs="1">
        <Col className="pt-5">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map(({ uuid, amount, measurement, name }) => (
              <li key={uuid}>{`${amount} ${measurement} ${name}`}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row xs="1">
        <Col className="pt-5">
          <h2>Directions</h2>
          <ol>
            {recipe.directions.map(({ instructions, optional }) => (
              <li key={instructions}>
                <em>{optional ? "(Optional) " : ""}</em> {instructions}
              </li>
            ))}
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetail;
