const numbtn = document.querySelectorAll(".num-btn");
const display = document.getElementById("display");
const wert1 = document.getElementById("wert1");
const wert2 = document.getElementById("wert2");

numbtn.forEach((element, index) => {
  // console.log(index+1)
  element.addEventListener("click", () => {
    if (index <= 8) {
      appendToDislay(index + 1);
    } else if (element.textContent === "0") {
      appendToDislay("0");
    } else if (element.textContent === "C") {
      display.value = "";
    } else if (element.textContent === "=") {
      display.value = eval(display.value);
    } else if (element.textContent === "%") {
      display.value = eval(display.value);
      display.value = display.value / 100;
    } else {
      appendToDislay(element.textContent);
    }
  }); // Ende vom EventListener
}); // Ende vom forEach

function appendToDislay(e) {
  display.value = display.value + e;
}

const taschenrechnerContainer = document.querySelector(".taschenrechner");
const themeChangeBtn = document.querySelectorAll(".btnBackground");

themeChangeBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (index === 0) {
      taschenrechnerContainer.style.backgroundImage =
        "radial-gradient(var(--secondcolor),var(--tertiercolor))";
      numbtn.forEach((element) => {
        element.style.backgroundImage =
          "radial-gradient(var(--secondcolor),var(--tertiercolor))";
        themeChangeBtn.forEach((element) => {
          element.style.backgroundImage =
            "radial-gradient(var(--secondcolor),var(--tertiercolor))";
        });
      });
    } else if (index === 1) {
      taschenrechnerContainer.style.backgroundImage =
        "radial-gradient(var(--textcolor),var(--secondcolor))";
      numbtn.forEach((element) => {
        element.style.color = "black";
        if (element.textContent === "C") {
          element.style.color = "red";
        }
        element.style.backgroundImage =
          "radial-gradient(var(--textcolor),var(--secondcolor))";
        themeChangeBtn.forEach((element) => {
          element.style.backgroundImage =
            "radial-gradient(var(--secondcolor),var(--textcolor))";
        });
      });
    } else if (index === 2) {
      taschenrechnerContainer.style.backgroundImage =
        "radial-gradient(var(--textcolor),var( --theme1))";
      numbtn.forEach((element) => {
        element.style.color = "black";
        if (element.textContent === "C") {
          element.style.color = "red";
        }
        element.style.backgroundImage =
          "radial-gradient(var(--textcolor),var( --theme1))";
        themeChangeBtn.forEach((element) => {
          element.style.backgroundImage =
            "radial-gradient(var(--textcolor),var( --theme1))";
        });
      });
    } else if (index === 3) {
      taschenrechnerContainer.style.backgroundImage =
        "radial-gradient(var(--textcolor),var( --theme2))";
      numbtn.forEach((element) => {
        element.style.color = "black";
        if (element.textContent === "C") {
          element.style.color = "red";
        }
        element.style.backgroundImage =
          "radial-gradient(var(--textcolor),var( --theme2))";
        themeChangeBtn.forEach((element) => {
          element.style.backgroundImage =
            "radial-gradient(var(--textcolor),var( --theme2))";
        });
      });
    } else {
      window.location.reload();
    }
  });
});

const formelBtn = document.querySelectorAll(".formel-btn");

formelBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.textContent === "Quadrat") {
      display.value = "";
      display.value = "A = 2 * a";
    } else if (element.textContent === "Rechteck") {
      display.value = "";
      display.value = " A = a * b";
    } else if (element.textContent === "Kreis") {
      display.value = "";
      display.value = " A = PI * r";
    }
  });
});
