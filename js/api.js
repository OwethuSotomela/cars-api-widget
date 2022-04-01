let carsElements = document.querySelector(".cars");

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
