import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import styles from "./InstructionInput.module.scss";

const InstructionInput = ({ inputId }) => {
  return (
    <FormGroup row className={styles.formRow}>
      <Col>
        <FormGroup row>
          <Label for={`instruction${inputId}`} sm={2}>
            <strong>{`step ${inputId + 1}`}</strong>
          </Label>
          <Col>
            <Input
              id={`instruction${inputId}`}
              name={`instruction${inputId}`}
              type="textarea"
              placeholder="Preheat oven to 400° and grease muffin tins or line with paper baking cups."
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <FormGroup check>
              <Label for={`isOptionalStep${inputId}`}>is this an optional step?</Label>
              <Input id={`isOptionalStep${inputId}`} type="checkbox" name={`isOptionalStep${inputId}`} />{" "}
              <Label check></Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </Col>
    </FormGroup>
  );
};

export default InstructionInput;
