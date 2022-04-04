let carsElements = document.querySelector(".cars");

let makes = document.querySelector(".makes");
let colors = document.querySelector(".colors");

async function getCars() {
  const result = await axios.get("https://api-tutor.herokuapp.com/v1/cars");
  console.log(result);
  result.data.forEach((car) => {
    const li = document.createElement("tr");
    li.innerHTML = `
    <td>${car.make}</td>
    <td>${car.model}</td>
    <td>${car.color}</td>
    <td>${car.price}</td>
    <td>${car.reg_number}</td>
    `;
    carsElements.appendChild(li);
  });
}
getCars();

axios
  .get("https://api-tutor.herokuapp.com/v1/makes")
  .then(function myMake(result) {
    result.data.forEach((car) => {
      const li = document.createElement("ul");
      li.innerHTML = `
      <li>${car}</li>
    `;
      makes.appendChild(li);
    });
  });

axios
  .get("https://api-tutor.herokuapp.com/v1/colors")
  .then(function myColor(result) {
    result.data.forEach((car) => {
      const li = document.createElement("ul");
      li.innerHTML = `
        <li>${car}</li>
        `;
      colors.appendChild(li);
    });
  });
