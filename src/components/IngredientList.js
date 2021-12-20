import React from "react";
import styles from "./IngredientList.module.scss";

const IngredientList = ({ ingredients }) => {
  return (
    <div className={styles.ingredientListContainer}>
      <ul>
        {ingredients.map(({ name, uuid }) => (
          //TODO: regex out text after comma in name
          // make text smaller and in columns, limit #
          <li key={uuid}>{name.split(",")[0]}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
