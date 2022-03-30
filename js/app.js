let carsElements = document.querySelector(".cars");
let getMake = document.getElementById("carMake").value;
let getColor = document.getElementById("carColor").value;

let displaySelectedCar = document.querySelector(".displaySelectedCar");
let submitBtn = document.querySelector(".submitBtn");
let apiWidget = document.querySelector(".apiWidget");

let templateSource = document.querySelector(".carTemplate").innerHTML;
let carTemplate = Handlebars.compile(templateSource);

async function getCars() {
  const result = await axios.get("https://api-tutor.herokuapp.com/v1/cars");
  console.log(result);
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

async function getSelectedCars() {
  let getMake = document.getElementById("carMake").value;
  console.log(getMake);
  let getColor = document.getElementById("carColor").value;
  console.log(getColor);
  const result = await axios.get(
    "http://api-tutor.herokuapp.com/v1/cars"
  );
  data = result.data;
  data = data.filter((car) => {
    return car.make == getMake && car.color == getColor;
  });
  console.log(data);
  displaySelectedCar.innerHTML = carTemplate({ model: data });
}
// getSelectedCars()

submitBtn.addEventListener("click", getSelectedCars);
