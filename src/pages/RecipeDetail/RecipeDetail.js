import React from "react";
import { Container, Row, Col, Card, CardTitle } from "reactstrap";
import IngredientDetailList from "../../components/IngredientDetailList";
import "./RecipeDetail.css";
import defaultImg from "../../images/generic-large.jpg";

const baseUrl = "http://localhost:3001";

const RecipeDetail = ({
  recipe: { title, description, images, cookTime, prepTime, servings, ingredients, directions },
}) => {
  return (
    <Container style={{ marginTop: "5rem" }}>
      <Row xs="1">
        <Col>
          <h1 className="display-3">{title}</h1>
          <h4 className="display-6 text-muted">{description}</h4>
        </Col>
      </Row>
      <Row>
        <Col xs="12" lg="10" style={{ paddingBottom: "3rem" }}>
          <img src={images ? `${baseUrl}${images.full}` : defaultImg} alt={title} width="100%" />
        </Col>
        <Col xs="12" lg="2">
          <Card style={{ padding: "1rem" }}>
            <CardTitle tag="h4" style={{ textAlign: "center", borderBottom: "1px solid black" }}>
              <i className="bi bi-stopwatch"></i> Prep Info
            </CardTitle>

            <p className="fs-5">
              <strong>Total: </strong> {`${cookTime + prepTime} mins`}
            </p>
            <div className="indent">
              <p>
                <strong>Prep: </strong> {`${prepTime} mins`}
              </p>
              <p>
                <strong>Cook: </strong> {`${cookTime} mins`}
              </p>
            </div>
            <p className="fs-5">
              <strong>Servings: </strong> {`${servings}`}
            </p>
          </Card>
        </Col>
      </Row>
      <Row xs="1">
        <Col className="pt-5">
          <IngredientDetailList ingredients={ingredients} />
        </Col>
      </Row>
      <Row xs="1">
        <Col className="pt-5 pb-5">
          <h2 style={{ margin: "0" }}>Directions</h2>
          <hr />
          <ol className="fs-5 ms-3">
            {directions.map(({ instructions, optional }) => (
              <li style={{ marginBottom: "1.5rem" }} key={instructions}>
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
