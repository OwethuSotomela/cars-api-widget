let carColor = document.querySelector(".carColor");
let carMake = document.querySelector(".carMake");
let selectedCars = document.querySelector(".selectedCars");
let submitBtn = document.querySelector(".submitBtn");

let colorTemplateSource = document.querySelector(".carColorTemplate").innerText;
let makeTemplateSource = document.querySelector(".carMakeTemplate").innerText;
let carDataTemplateSource =
  document.querySelector(".carDataTemplate").innerText;

let carColorTemplate = Handlebars.compile(colorTemplateSource);
let carMakeTemplate = Handlebars.compile(makeTemplateSource);
let carDataTemplate = Handlebars.compile(carDataTemplateSource);

axios
  .get("https://api-tutor.herokuapp.com/v1/makes")
  .then(function myMake(result) {
    carMake.innerHTML = carMakeTemplate({ carMake: result.data });
  });

axios
  .get("https://api-tutor.herokuapp.com/v1/colors")
  .then(function myColor(result) {
    carColor.innerHTML = carColorTemplate({ carColor: result.data });
  });

async function getSelectedCars() {
  let getMake = document.getElementById("carMake").value;
  let getColor = document.getElementById("carColor").value;
  const result = await axios.get("https://api-tutor.herokuapp.com/v1/cars");
  data = result.data;
  data = data.filter((car) => {
    return car.make == getMake && car.color == getColor;
  });
  selectedCars.innerHTML = carDataTemplate({ selectedCars: data });
}

submitBtn.addEventListener("click", getSelectedCars);
