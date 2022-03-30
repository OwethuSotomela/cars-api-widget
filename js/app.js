let carsElements = document.querySelector(".cars");
let carMake = document.querySelector(".carMake");
let carModel = document.querySelector(".carModel");
let carColor = document.querySelector(".carColor");
let displaySelectedCar = document.querySelector(".displaySelectedCar");
let submitBtn = document.querySelector(".submitBtn");

async function getCars() {
  const result = await axios.get("https://api-tutor.herokuapp.com/v1/cars");
  result.data.forEach((car) => {
    const li = document.createElement("tr");
    li.innerHTML = `
    <td>${car.make}</td>
    <td>${car.model}</td>
    <td>${car.color}</td>
    `;
    carsElements.appendChild(li);
  });
}

getCars();

function getSelectedCars() {
  let getMake = carMake.value;
  console.log(getMake);

  let getModel = carModel.value;
  console.log(getModel);

  let getColor = carColor.value;
  console.log(getColor);
}

submitBtn.addEventListener("click", getSelectedCars);
