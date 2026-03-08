const numbtn = document.querySelectorAll(".num-btn");
const display = document.getElementById("display");

numbtn.forEach((element, index) => {
  // console.log(index+1)
  element.addEventListener("click", () => {
    if (index <= 8) {
      appendToDislay(index + 1);
        } else if (element.textContent === "0") {
      appendToDislay("0");
        } else if (element.textContent === "C") {
      display.value='';
        }else if (element.textContent==='='){
            display.value=eval(display.value)

        } else if (element.textContent === '%'){
            display.value=eval(display.value);
        display.value=display.value/100;
            } 
        else {
      appendToDislay(element.textContent);
    }
  });
});

function appendToDislay(e) {
  display.value = display.value + e;
}
