import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import IngredientList from "./IngredientList";

const RecipeListCard = ({ uuid, title, description, images, ingredients }) => {
  const baseImgUrl = "http://localhost:3001";
  const collapseId = `x${uuid}`; //for Collapse to not be angry id must start with alpha
  return (
    <Card>
      <CardImg alt={description} src={`${baseImgUrl}${images.medium}`} top />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {description}
        </CardSubtitle>
        <CardText>This is card text.</CardText>
        <Button
          color="info"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          Peek the ingredients
        </Button>
        <Link to={`/recipe/${uuid}`}>
          <Button color="success">Cook This!</Button>
        </Link>
        <div className="collapse" id={collapseId}>
          <IngredientList ingredients={ingredients} />
        </div>
      </CardBody>
    </Card>
  );
};

export default RecipeListCard;
