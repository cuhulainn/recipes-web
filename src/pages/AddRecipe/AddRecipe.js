import React, { useState } from "react";
import { Button, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import IngredientInput from "../../components/AddRecipe/IngredientInput";
import InstructionInput from "../../components/AddRecipe/InstructionInput";
import createNewRecipe from "../../utils/createNewRecipe";
import styles from "./AddRecipe.module.scss";

const baseUrl = "http://localhost:3001";
const recipesUrl = `${baseUrl}/recipes`;

const AddRecipe = () => {
  const [ingredientInputArr, setingredientInputArr] = useState([0]);
  const [instructionInputArr, setInstructionInputArr] = useState([0]);

  const addIngredientInput = () => {
    setingredientInputArr([...ingredientInputArr, ingredientInputArr.length]);
  };

  const removeIngredientInput = () => {
    ingredientInputArr.pop();
    setingredientInputArr([...ingredientInputArr]);
  };

  const addInstructionInput = () => {
    setInstructionInputArr([...instructionInputArr, instructionInputArr.length]);
  };

  const removeInstructionInput = () => {
    instructionInputArr.pop();
    setInstructionInputArr([...ingredientInputArr]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = createNewRecipe(e.target.form);
    fetch(recipesUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then(() => alert("Your recipe has been added!"))
      .catch((err) => {
        console.log(err);
        alert("There was a problem, please retry your submission!");
      });
  };

  return (
    <div id="formContainer">
      <h4 style={{ marginTop: "5rem", marginLeft: "4vh" }}>add your recipe to our collection!</h4>
      <Row>
        <Col xl={6} md={9} sm={12}>
          <Form id="addRecipeForm" style={{ margin: "4vh" }}>
            <FormGroup row className={styles.formRow}>
              <Label for="title" sm={3}>
                title
              </Label>
              <Col>
                <Input id="title" name="title" placeholder="William Shatner's Cappucino Muffins" />
              </Col>
            </FormGroup>
            <FormGroup row className={styles.formRow}>
              <Label for="description" sm={3}>
                description
              </Label>
              <Col>
                <Input id="description" name="description" placeholder="Chocolatey coffee-licious muffins" />
              </Col>
            </FormGroup>
            <FormGroup row className={styles.formRow}>
              <Label for="servings" sm={3}>
                servings (number)
              </Label>
              <Col sm={2}>
                <Input id="servings" name="servings" placeholder="12" />
              </Col>
            </FormGroup>
            <FormGroup row className={styles.formRow}>
              <Label for="prepTime" sm={3}>
                prep time (mins)
              </Label>
              <Col sm={2}>
                <Input id="prepTime" name="prepTime" placeholder="10" />
              </Col>
            </FormGroup>
            <FormGroup row className={styles.formRow}>
              <Label for="cookTime" sm={3}>
                cook time (mins)
              </Label>
              <Col sm={2}>
                <Input id="cookTime" name="cookTime" placeholder="20" />
              </Col>
            </FormGroup>
            <div className={styles.ingredientsContainer}>
              <h3>Ingredients</h3>
              {ingredientInputArr.map((id) => (
                <IngredientInput key={`ing${id}`} inputId={id} />
              ))}
              <div className={styles.buttonContainer}>
                <Button className={styles.addButton} onClick={addIngredientInput}>
                  add ingredient
                </Button>
                <Button className={styles.removeButton} onClick={removeIngredientInput}>
                  delete ingredient
                </Button>
              </div>
            </div>
            <div className={styles.directionsContainer}>
              <h3>Directions</h3>
              {instructionInputArr.map((id) => (
                <InstructionInput key={`instr${id}`} inputId={id} />
              ))}
              <div className={styles.buttonContainer}>
                <Button className={styles.addButton} onClick={addInstructionInput}>
                  add step
                </Button>
                <Button className={styles.removeButton} onClick={removeInstructionInput}>
                  delete step
                </Button>
              </div>
            </div>
            <FormGroup row className={styles.formRow}>
              <Col>
                <div className={styles.submitButtonContainer}>
                  <Button className={styles.submitButton} onClick={handleSubmit}>
                    add my recipe
                  </Button>
                </div>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AddRecipe;
