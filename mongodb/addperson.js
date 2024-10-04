import { createUser } from "./dataServices.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = {
    name: e.target.name.value,
    age: e.target.age.value,
    gender: e.target.gender.value,
    exp: e.target.exp.value,
    type: e.target.type.value,
    qualification: e.target.qualification.value,
  };
  const { res, error } = await createUser(formData);
  if (res) {
    alert("user created successfully!");
  } else if (error) {
    alert("something went wrong");
  }
  for (const key in formData) {
    if (key !== "gender" && key !== "type") {
      e.target[key].value = "";
    }
  }
});
