import jsonToForm from '../bin/index.js';

const json = {
  label: "Name",
  type: "text",
  id: "name",
};

const jsonToString = JSON.stringify(json);
const result = jsonToForm(json);

if (jsonToString === result) {
  console.log("\x1b[32m", ".");
} else {
  console.log("\x1b[31m", "E");
}