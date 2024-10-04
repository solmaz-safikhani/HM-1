import { getAllUser, deleteUser } from "./dataServices.js";

const cardContainer = document.querySelector(".cardContainer");

getAllUser()
  .then((data) => {
    data.map((item) => {
      cardContainer.innerHTML += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${item.type}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Age: ${item.age}</li>
        <li class="list-group-item">Gender: ${item.gender}</li>
        <li class="list-group-item">Qualification: ${item.qualification}</li>
        <li class="list-group-item">Exp: ${item.exp}</li>
      </ul>
      <div class="card-body">
      <button id="${item._id}" class="btn btn-danger delete-but">Delete</button>
      </div>
    </div>`;
    });

    document.querySelectorAll(".delete-but").forEach((el) => {
      el.addEventListener("click", async (e) => {
        const { res, error } = await deleteUser(e.target.id);
        if (res) {
          e.target.parentElement.parentElement.remove();
          alert("user created successfully!");
        } else if (error) {
          alert("something went wrong");
        }
      });
    });
  })
  .catch((er) => {
    console.log(er);
  });
