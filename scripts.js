function handleSubmit(e) {
  e.preventDefault();
  setTimeout(() => {
    alert("Thank you for your feedback! 🎉");
  }, 800);
  e.target.reset();
}

document.getElementById("form").addEventListener("submit", handleSubmit);

const submitButton = document.getElementById("submit-button");

const acornImage = document.createElement("img");
acornImage.src = "acorn.png";
acornImage.alt = "Acorn Icon";
acornImage.style.width = "15px";
acornImage.style.marginLeft = "10px";
submitButton.appendChild(acornImage);

submitButton.addEventListener("mouseover", () => {
  acornImage.style.display = "inline";
});

submitButton.addEventListener("mouseout", () => {
  acornImage.style.display = "none";
});
