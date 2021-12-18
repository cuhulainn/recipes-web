import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardTitle } from "reactstrap";
import IngredientDetailList from "../../components/IngredientDetailList";
import "./RecipeDetail.css";

const baseUrl = "http://localhost:3001";
const recipesUrl = `${baseUrl}/recipes`;

const RecipeDetail = ({ id, recipes }) => {
  const [recipe, setRecipe] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (recipes.length > 0) {
      setRecipe(recipes.filter((recipe) => recipe.uuid === id)[0]);
      setIsLoading(false);
    } else {
      fetch(recipesUrl)
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
        <Col xs="12" md="10">
          <img src={`${baseUrl}${recipe.images.full}`} alt={recipe.title} width="100%" />
        </Col>
        <Col xs="12" md="2" className="">
          <Card>
            <CardTitle tag="h4">
              <i className="bi bi-stopwatch"></i> Prep Info
            </CardTitle>

            <p className="fs-5">
              <strong>Total: </strong> {`${recipe.cookTime + recipe.prepTime} mins`}
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
          <IngredientDetailList ingredients={recipe.ingredients} />
        </Col>
      </Row>
      <Row xs="1">
        <Col className="pt-5 pb-5">
          <h2>Directions</h2>
          <ol className="fs-5 ms-3">
            {recipe.directions.map(({ instructions, optional }) => (
              <li style={{ lineHeight: "3rem" }} key={instructions}>
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
