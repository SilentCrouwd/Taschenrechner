// --- DOM-Elemente selektieren ---
const numbtn = document.querySelectorAll(".num-btn"); // Alle Ziffern- und Operationstasten
const display = document.getElementById("display");    // Das Haupt-Eingabefeld/Display
const maxLenght=15;

// --- Event-Listener für die Taschenrechner-Tasten ---
numbtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Überprüfung des Index (0-8 entspricht meist den Tasten 1-9)
    if (index <= 8) {
      appendToDislay(index + 1);
    } 
    // Behandlung der Null-Taste
    else if (element.textContent === "0") {
      appendToDislay("0");
    } 
    // Display leeren (Clear-Taste)
    else if (element.textContent === "C") {
      display.value = "";
    } 
    // Berechnung ausführen
    else if (element.textContent === "=") {
      // eval() berechnet den String im Display (Vorsicht bei komplexen Apps!)
  const ergebniss= eval(display.value);
    display.value=ergebniss.toPrecision(7)
    } 
    // Prozentrechnung
    else if (element.textContent === "%") {
      display.value = eval(display.value); // Erst Ergebnis berechnen
      display.value = display.value / 100; // Dann durch 100 teilen
    } 
    
    // PI
   
    else if(element.textContent==="PI"){
      const pi=Math.PI.toFixed(4);
    display.value = display.value + pi;


    }
     
    
    // Operatoren (+, -, *, /) oder Dezimalpunkt
    else {
      appendToDislay(element.textContent);
    }
  });
});

// Funktion zum Hinzufügen von Zeichen zum Display
function appendToDislay(e) {
if(display.value.length<maxLenght){
  display.value = display.value + e;
  }
  else{
    display.value='ERROR to Long'
  }  
  
  
}

// --- Theme / Design Wechsel Logik ---
const taschenrechnerContainer = document.querySelector(".taschenrechner");
const themeChangeBtn = document.querySelectorAll(".btnBackground");
const btnFormel = document.querySelectorAll(".formel-btn");

themeChangeBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Theme 1: Standard / Dunkel (nutzt CSS-Variablen)
    if (index === 0) {
      taschenrechnerContainer.style.backgroundImage =
        "radial-gradient(var(--secondcolor),var(--tertiercolor))";
      numbtn.forEach((element) => {
        element.style.backgroundImage =
          "radial-gradient(var(--secondcolor),var(--tertiercolor))";
        themeChangeBtn.forEach((element) => {
          element.style.backgroundImage =
            "radial-gradient(var(--secondcolor),var(--tertiercolor))";
        btnFormel.forEach((element) => {
          element.style.backgroundImage =
            "radial-gradient(var(--secondcolor),var(--tertiercolor))";
        });
          });
      });
    } 
    // Theme 2: Helleres Design
    else if (index === 1) {
      taschenrechnerContainer.style.backgroundImage =
        "radial-gradient(var(--textcolor),var(--secondcolor))";
      numbtn.forEach((element) => {
        element.style.color = "black";
        if (element.textContent === "C") { element.style.color = "red"; }
        element.style.backgroundImage =
          "radial-gradient(var(--textcolor),var(--secondcolor))";
        themeChangeBtn.forEach((element) => {
              element.style.color = "black";
          element.style.backgroundImage =
              "radial-gradient(var(--textcolor),var(--secondcolor))";
        btnFormel.forEach((element) => {
              element.style.color = "black";
          element.style.backgroundImage =
             "radial-gradient(var(--textcolor),var(--secondcolor))";
        });
          });
      });
    } 
    // Theme 3: Custom Theme 1
    else if (index === 2) {
      taschenrechnerContainer.style.backgroundImage =
        "radial-gradient(var(--textcolor),var( --theme1))";
      numbtn.forEach((element) => {
        element.style.color = "black";
        if (element.textContent === "C") { element.style.color = "red"; }
        element.style.backgroundImage =
          "radial-gradient(var(--textcolor),var( --theme1))";
        themeChangeBtn.forEach((element) => {
            element.style.color = "black";
          element.style.backgroundImage =
            "radial-gradient(var(--textcolor),var( --theme1))";
        btnFormel.forEach((element) => {
               element.style.color = "black";
          element.style.backgroundImage =
                 "radial-gradient(var(--textcolor),var( --theme1))";
        });
     
          });
      });
    } 
    // Theme 4: Custom Theme 2
    else if (index === 3) {
      taschenrechnerContainer.style.backgroundImage =
        "radial-gradient(var(--textcolor),var( --theme2))";
      numbtn.forEach((element) => {
        element.style.color = "black";
        if (element.textContent === "C") { element.style.color = "red"; }
        element.style.backgroundImage =
          "radial-gradient(var(--textcolor),var( --theme2))";
        themeChangeBtn.forEach((element) => {
               element.style.color = "black";
          element.style.backgroundImage =
            "radial-gradient(var(--textcolor),var( --theme2))";
             
           btnFormel.forEach((element) => {
                 element.style.color = "black";
          element.style.backgroundImage =
                "radial-gradient(var(--textcolor),var( --theme2))"
        });
          });
      });
    } 
    // Reset: Letzter Button lädt die Seite neu (Standard-Zustand)
    else {
      window.location.reload();
    }
  });
});

// --- Formel-Anzeige Logik ---
const formelBtn = document.querySelectorAll(".formel-btn");

formelBtn.forEach((element) => {
  element.addEventListener("click", () => {
    // Zeigt die mathematische Formel im Display an, wenn ein Formel-Button geklickt wird
    if (element.textContent === "Quadrat") {
      display.value = "A = 2 * a"; // Hinweis: Flächeninhalt wäre a*a oder a²
    } else if (element.textContent === "Rechteck") {
      display.value = "A = a * b";
    } else if (element.textContent === "Kreis") {
      display.value = "A = PI * r²"; // Formel für Kreisfläche ergänzt (r²)
    }
  });
});