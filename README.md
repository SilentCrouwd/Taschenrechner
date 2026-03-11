# My Taschenrechner

Ein interaktiver Web-Taschenrechner mit verschiedenen Designs, mathematischen Formeln und integrierten Funktionen.

## Features

- **Grundrechenarten**: Addition, Subtraktion, Multiplikation und Division.
- **Erweiterte Funktionen**:
  - Prozentrechnung (`%`)
  - Kreiszahl PI (`PI`)
- **Mathematische Formeln**: Schneller Zugriff auf Formeln für:
  - Quadrat (Umfang/Fläche)
  - Rechteck (Fläche)
  - Kreis (Fläche)
- **Design-Umschalter (Themes)**: Vier verschiedene Farbschemata (Theme 1, Theme 2, Theme 3, Theme 4) sowie ein Reset auf den Standard-Zustand.
- **Fehlermeldungen**: Validierung der Eingabelänge (max. 15 Zeichen) mit ERROR-Anzeige.

## Technologien

- **HTML5**: Struktur des Taschenrechners und der Bedienelemente.
- **CSS3**: Layout mittels CSS Grid, Flexbox und moderne Design-Elemente wie `radial-gradient` und CSS-Variablen.
- **JavaScript (Vanilla JS)**: 
  - DOM-Manipulation für Display-Updates.
  - Ereignissteuerung (Event Listener) für Tasteninteraktionen.
  - Dynamische Design-Anpassung via JavaScript-Styles.
  - Mathematische Berechnungen mittels `eval()` und `Math`-Objekt.

## Projektstruktur

- `index.html`: Das Hauptgerüst der Anwendung.
- `stylesheet.css`: Alle Styles und Farbschemata.
- `script.js`: Die gesamte Logik für Berechnungen und UI-Interaktionen.
- `img/`: Ordner für Bilder (optional).
- `.git/`: Git-Versionsverwaltung.

## Bedienung

1. Öffne die `index.html` in einem beliebigen Webbrowser.
2. Nutze die Zifferntasten und Operatoren für Berechnungen.
3. Klicke auf die Theme-Buttons am unteren Rand, um das Aussehen des Taschenrechners dynamisch zu ändern.
4. Nutze die Formel-Buttons, um mathematische Grundformeln im Display anzuzeigen.
5. Mit der Taste **C** (Clear) wird das Display geleert.

---
*Erstellt zur Dokumentation des Programms.*
