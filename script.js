let cmBtn = document.querySelector(".cmBtn");

cmBtn.addEventListener("click", () => {
  let feet = document.querySelector("#feet").value;
  console.log(feet);
  let inches = document.querySelector("#inches").value;
  let result = document.querySelector(".result");

  if (isNaN(feet) || isNaN(inches)) {
    result.innerText = "Please enter a valid number!";
  } else if (feet < 0 || feet >= 9) {
    result.innerText = "Please enter a feet value between 0 and 8";
  } else if (feet == ""|| inches=="") {
    result.innerText = "Please enter feet and inches";
  } else if (inches < 0 || inches >= 12) {
    result.innerText = "Please enter a feet value between 0 and 12";
  } else {
    let feetToInch = feet * 12;
    let inchResult = +feetToInch + +inches;
    let cmResult = inchResult * 2.54;
    result.innerText = `Your Height in ${cmResult} cm`;
  }
});
