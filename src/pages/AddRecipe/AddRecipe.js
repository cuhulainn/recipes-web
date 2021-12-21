import React, { useState } from "react";
import { Button, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import IngredientInput from "../../components/AddRecipe/IngredientInput";
import InstructionInput from "../../components/AddRecipe/InstructionInput";
import styles from "./AddRecipe.module.scss";
import { v4 as uuidv4 } from "uuid";

const baseUrl = "http://localhost:3001";
const recipesUrl = `${baseUrl}/recipes`;

const AddRecipe = () => {
  const [ingredientInputArr, setingredientInputArr] = useState([0]);
  const [instructionInputArr, setInstructionInputArr] = useState([0]);

  const addIngredientInput = () => {
    setingredientInputArr([...ingredientInputArr, ingredientInputArr.length]);
  };

  const addInstructionInput = () => {
    setInstructionInputArr([...instructionInputArr, instructionInputArr.length]);
  };

  const createNewRecipe = (inputs) => {
    const newRecipe = {};
    let ingArr = [];
    let instrArr = [];
    for (let i = 0; i < inputs.length; i++) {
      let { name, value } = inputs[i];

      if (name) {
        if (name[0] === "i") {
          //ingredient addition
          if (name.slice(0, 3) === "ing") {
            const amount = inputs[i + 1].value;
            const measurement = inputs[i + 2].value;
            ingArr.push({
              uuid: uuidv4(),
              name: value,
              amount: parseInt(amount),
              measurement,
            });
            i += 2;
          }
          //instructions addition
          if (name.slice(0, 5) === "instr") {
            const isChecked = inputs[i + 1].checked;
            instrArr.push({ instructions: value, optional: isChecked });
            i++;
          }
        } else {
          //root level additions
          newRecipe[name] = !isNaN(parseFloat(value)) ? parseFloat(value) : value;
        }
      }
    }
    newRecipe.ingredients = ingArr;
    newRecipe.directions = instrArr;
    newRecipe.uuid = uuidv4();
    return newRecipe;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = createNewRecipe(e.target.form);
    console.log(newRecipe);
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
          <Form style={{ margin: "4vh" }}>
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
            <h3>Ingredients</h3>
            {ingredientInputArr.map((id) => (
              <IngredientInput key={`ing${id}`} inputId={id} />
            ))}
            <Button onClick={addIngredientInput}>add another ingredient</Button>
            <h3>Directions</h3>
            {instructionInputArr.map((id) => (
              <InstructionInput key={`instr${id}`} inputId={id} />
            ))}
            <Button onClick={addInstructionInput}>add another instruction</Button>
            <FormGroup row className={styles.formRow}>
              <Col>
                <Button onClick={handleSubmit}>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AddRecipe;
