import React, { useEffect } from "react";
import getSpecials from "../api/specials";
import useApi from "../hooks/useApi";
import styles from "./IngredientDetailList.module.scss";

const IngredientDetailList = ({ ingredients }) => {
  const { data: specials, isLoading, isError, request: getSpecialsData } = useApi(getSpecials, "specials");

  useEffect(() => {
    getSpecialsData();
    return () => localStorage.removeItem("specials");
  }, [getSpecialsData]);

  const specialTypeSwitch = (specialType) =>
    ({
      local: "Local Special!",
      event: "Special Event!",
      promocode: "Promo Code!",
      sale: "Sale!",
    }[specialType] || "Special!");

  return (
    <>
      <h2 className={styles.ingredientsHeaderText}>Ingredients</h2>
      <hr />
      {isLoading && <p>Loading specials</p>}
      {isError && <p>There was an error fetching specials!</p>}
      {specials &&
        ingredients.map(({ uuid, amount, measurement, name }) => {
          const ingredientSpecials = specials.filter((special) => special.ingredientId === uuid);
          if (ingredientSpecials.length > 0) {
            return (
              <div key={uuid} style={{ marginBottom: "1rem" }}>
                <div className="form-check fs-5 ms-3">
                  <input className="form-check-input" type="checkbox" value={name} id={uuid} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    {`${amount === null ? "" : amount} ${measurement} ${name}`}
                  </label>
                </div>
                {ingredientSpecials.map((special) => (
                  <div className="fs-5 ms-5" key={special.uuid}>
                    <p className="m-0 ">
                      <i className="bi bi-arrow-return-right"></i>
                      <span className={styles.specialLabel}>
                        <strong>{` ${specialTypeSwitch(special.type)} `}</strong>
                      </span>
                      <span>{`${special.title}: ${special.text}`}</span>
                    </p>
                  </div>
                ))}
              </div>
            );
          } else {
            return (
              <div className="form-check fs-5 ms-3" key={uuid} style={{ marginBottom: "1rem" }}>
                <input className="form-check-input" type="checkbox" value={name} id={uuid} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {`${amount === null ? "" : amount} ${measurement} ${name}`}
                </label>
              </div>
            );
          }
        })}
    </>
  );
};

export default IngredientDetailList;
