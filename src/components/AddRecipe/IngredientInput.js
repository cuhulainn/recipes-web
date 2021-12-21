import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import styles from "./IngredientInput.module.scss";

const IngredientInput = ({ inputId }) => {
  return (
    <FormGroup row className={styles.formRow}>
      <Col xl={3} lg={3} xs={5}>
        <Label for={`ingName${inputId}`}>name</Label>
        <Col>
          <Input id={`ingName${inputId}`} name={`ingName${inputId}`} placeholder="flour" />
        </Col>
      </Col>
      <Col xl={2} xs={3}>
        <Label for={`ingAmount${inputId}`}>amount</Label>
        <Col>
          <Input id={`ingAmount${inputId}`} name={`ingAmount${inputId}`} placeholder="2" />
        </Col>
      </Col>
      <Col xl={3} xs={4}>
        <Label for={`ingMeasurement${inputId}`}>measurement</Label>
        <Col>
          <Input id={`ingMeasurement${inputId}`} name={`ingMeasurement${inputId}`} placeholder="cups" />
        </Col>
      </Col>
    </FormGroup>
  );
};

export default IngredientInput;
