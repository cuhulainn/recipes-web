import React, { useState, useEffect } from "react";

const baseUrl = "http://localhost:3001";
const specialsUrl = `${baseUrl}/specials`;

const IngredientDetailList = ({ ingredients }) => {
  const [specials, setSpecials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(specialsUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setSpecials(data);
      })
      .catch((err) => {
        console.error(`Error fetching specials: ${err}`);
      })
      .finally(setIsLoading(false));
  }, [setSpecials]);

  const specialTypeSwitch = (specialType) =>
    ({
      local: "Local Special!",
      event: "Special Event!",
      promocode: "Promo Code!",
      sale: "Sale!",
    }[specialType] || "Special!");

  if (isLoading) {
    return <div>Checking for specials!</div>;
  }

  return (
    <>
      <h2>Ingredients</h2>
      {ingredients.map(({ uuid, amount, measurement, name }) => {
        const ingredientSpecials = specials.filter((special) => special.ingredientId === uuid);
        if (ingredientSpecials.length > 0) {
          return (
            <div key={uuid}>
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
                    <span className="text-capitalize text-info">
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
            <div className="form-check fs-5 ms-3" key={uuid}>
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
