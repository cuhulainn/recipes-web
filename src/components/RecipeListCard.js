import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import IngredientList from "./IngredientList";
import styles from "./RecipeListCard.module.scss";

const RecipeListCard = ({ uuid, title, description, images, ingredients }) => {
  const baseImgUrl = "http://localhost:3001";
  const collapseId = `x${uuid}`; //for Collapse to not be angry id must start with alpha
  return (
    <Card style={{ minHeight: "400px", marginBottom: "2rem" }}>
      <div className={styles.imgContainer}>
        <CardImg
          alt={description}
          src={`${baseImgUrl}${images.medium}`}
          top
          style={{
            position: "absolute",
            width: "auto",
            height: "100%",
            left: "50%",
            top: "50%",
            webkitTransform: "translate(-50%,-50%)",
            msTransform: "translate(-50%,-50%)",
            transform: "translate(-50%,-50%)",
          }}
        />
      </div>

      <CardBody style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {description}
        </CardSubtitle>
        <div className={styles.buttonContainer}>
          <Button
            size="sm"
            className={styles.ingredientsButton}
            data-bs-toggle="collapse"
            data-bs-target={`#${collapseId}`}
            aria-expanded="false"
            aria-controls={collapseId}
          >
            ingredient list
          </Button>
          <Link to={`/recipe/${uuid}`}>
            <Button className={styles.cookThisButton}>cook this!</Button>
          </Link>
        </div>
        <div className="collapse" id={collapseId}>
          <IngredientList ingredients={ingredients} />
        </div>
      </CardBody>
    </Card>
  );
};

export default RecipeListCard;
