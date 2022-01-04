import { v4 as uuidv4 } from "uuid";

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

export default createNewRecipe;
