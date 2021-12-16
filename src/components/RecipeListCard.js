import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import IngredientList from "./IngredientList";

const RecipeListCard = ({ uuid, title, description, images, ingredients }) => {
  const baseImgUrl = "http://localhost:3001";
  return (
    <Card>
      <CardImg
        alt={description}
        src={`${baseImgUrl}${images.medium}`}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {description}
        </CardSubtitle>

        <CardText>This is card text.</CardText>
        <Button
          color="info"
          data-toggle="collapse"
          data-target={`#${uuid}`}
          aria-expanded="false"
          aria-controls={uuid}
        >
          Peek the ingredients
        </Button>
        <Button color="success">Cook This!</Button>
        <div class="collapse" id={uuid}>
          <IngredientList ingredients={ingredients} />
        </div>
      </CardBody>
    </Card>
  );
};

export default RecipeListCard;
